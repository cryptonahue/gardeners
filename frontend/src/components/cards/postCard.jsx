import Link from "next/link";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";



const Card {},

	return (
		<Link href={`${postUrl}/${slug}`}>
			<div className="Post__container">
				<div className="Post__image Post__image-roundle">
					{image && (
						<Image
							width="100%"
							height={60}
							src={`${API_URL}${image.url}`}
						/>
					)}
				</div>
				<div className="Post__info Post__info-roundle">
					<div>
						<div className="Post__categories">
							<Typography
								variant="body1"
								className="Post__subtitle"
							>
								{" "}
								{category ? category.name : "sin categoria"}
							</Typography>

							<div className="Post__infor-categories">
								{shared && (
									<Shared
										title={title}
										content={description}
									/>
								)}
							</div>
						</div>
						<br />
						<Typography variant="h4">
							{title ? title : "Sin título"}
						</Typography>
						<br />
						<Typography variant="body1" noWrap>
							{description ? (
								minimalBody(description, 200)
							) : (
								<>No hay contenido para mostrar.</>
							)}
						</Typography>
					</div>

					<div className="Post__user">
						<div className="Post__user-image">
							{users_permissions_user &&
								users_permissions_user.photoURL && (
									<Avatar
										sx={{ width: 40, height: 40 }}
										alt={
											author
												? author.firstname
												: defaultApp.name
										}
										src={`${users_permissions_user.photoURL}`}
									/>
								)}
						</div>
						<div className="Post__user-info">
							<b>{users_permissions_user.username}</b>
							<br />
							<span>
								<small>
									{date_published &&
										validateDate(date_published)}
								</small>
							</span>
							<p />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);

export default Card;
