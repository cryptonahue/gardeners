import { gql } from "@apollo/client/core";
import { apolloClient } from "../apollo-client";
import { prettyJSON } from "../helpers";
import { getAuthenticationToken, setAuthenticationToken } from "../state";
// import { getAddressFromSigner, signText } from "../ethers.service";

/**
 *
 * steps to sign in:
 *
 * 0 - check if logged in with isLoggedIn()
 * 1 - generateChallenge()
 * 2 - the user sign that challenge
 * 3 - use that signature to call auth()
 */

const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

const AUTHENTICATION = `
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`;

const authenticate = (address: string, signature: string) => {
  return apolloClient.mutate({
    mutation: gql(AUTHENTICATION),
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};

export const generateChallenge = async (address: string) => {
  const challengeResponse = await apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
  });
  return challengeResponse.data.challenge.text;
};

export const isLoggedIn = async () => {
  if (getAuthenticationToken()) {
    console.log("login: already logged in");
    return true;
  } else {
    console.log("login: not logged in :(");
    return false;
  }
};

export const auth = async (address: string, signature: string) => {
  const accessTokens = await authenticate(address, signature);
  prettyJSON("login: result", accessTokens.data);

  setAuthenticationToken(accessTokens.data.authenticate.accessToken);

  return accessTokens.data;
};

/*
export const login = async (address = getAddressFromSigner()) => {
  if (getAuthenticationToken()) {
    console.log("login: already logged in");
    return;
  }

  console.log("login: address", address);

  // we request a challenge from the server
  const challengeResponse = await generateChallenge(address);

  // sign the text with the wallet
  const signature = await signText(challengeResponse.data.challenge.text);

  const accessTokens = await authenticate(address, signature);
  prettyJSON("login: result", accessTokens.data);

  setAuthenticationToken(accessTokens.data.authenticate.accessToken);

  return accessTokens.data;
};
*/
