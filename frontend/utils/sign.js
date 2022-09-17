import { ethers } from "ethers";
import { generateChallenge, auth, isLoggedIn } from "../login/login";
import { createPostToSign } from "../post/post";
import { createProfile } from "../profile/test-profile";
import { getDefaultProfileRequest } from "../profile/get-default-profile";

export const signAuth = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const userAddress = await signer.getAddress()

    const challenge = await generateChallenge(userAddress);
    try {
        signer.signMessage(challenge).then(async (result) => {
        await auth(userAddress, result);
        console.log(result);
    });
    } catch (error) {
        // handle error
        console.log(error);
    }
};

export const post = async () => {
    let description = 'qsy'
    let tags = ["crypto", "defi"]

    let isLogged = await isLoggedIn();
    if (isLogged) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        // let typedData = await createPostToSign(userAddress, description, tags)
    }else{
        console.log("not logged")
    }
}

export const createTestProfile = async () => {
    let isLogged = await isLoggedIn();
    if (isLogged) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        await createProfile(userAddress)
    }else{
        console.log("not logged")
    }
}