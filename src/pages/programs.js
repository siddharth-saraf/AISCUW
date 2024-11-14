import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"programs"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="rgb(36,36,36)"
			margin="0 0 0 0"
			padding="48px 160px 24px 160px"
			quarkly-title="Header"
			width="100% border-box"
			sm-padding="48px 48px 24px 48px"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				margin="0px 0 0px 0px"
				width="100%"
				max-width="100%"
				sm-width="100% border-box"
				sm-min-width="fit-content"
				sm-min-height="fit-content"
				sm-height="fit-content"
				sm-align-items="center"
				sm-justify-content="space-between"
			/>
			<Image
				src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22:12:47.498Z"
				display="block"
				height="32px"
				width="32px"
				quarkly-title="Logo"
				sm-margin="0px 24px 0px 0px"
				min-height="32px"
				min-width="32px"
				srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				min-width="100px"
				min-height="fit-content"
				quarkly-title="Pages"
				sm-height="fit-content"
				sm-min-height="fit-content"
				height="fit-content"
			>
				<Link
					href="/Home"
					color="#F7FBFF"
					max-width="fit-content"
					text-decoration-line="initial"
					padding="0px 32px 0px 0px"
					font="200 16px sans-serif"
					hover-color="#FF43AD"
					transition="all 0.2s ease 0s"
					sm-padding="0px 0 0px 0px"
					height="100% border-box"
					min-height="fit-content"
					target="_blank"
					quarkly-title="Home"
				>
					Home
				</Link>
				<Link
					href="/our-team"
					color="#F7FBFF"
					max-width="fit-content"
					text-decoration-line="initial"
					padding="0px 32px 0px 0px"
					font="200 16px sans-serif"
					hover-color="#FF43AD"
					transition="all 0.2s ease 0s"
					sm-padding="0px 0 0px 0px"
					height="100% border-box"
					min-height="fit-content"
					target="_blank"
					quarkly-title="Our Team"
				>
					Our Team
				</Link>
				<Link
					href="https://humansforai.com"
					color="#F7FBFF"
					max-width="fit-content"
					text-decoration-line="initial"
					padding="0px 32px 0px 0px"
					font="200 16px sans-serif"
					hover-color="#FF43AD"
					transition="all 0.2s ease 0s"
					sm-padding="0px 0 0px 0px"
					height="100% border-box"
					min-height="fit-content"
					target="_blank"
					quarkly-title="Humans for AI "
				>
					Humans for AI
				</Link>
				<Link
					href="https://humansforai.com/aisc/"
					color="--light"
					max-width="fit-content"
					text-decoration-line="initial"
					font="200 16px sans-serif"
					hover-color="#FF43AD"
					transition="all 0.2s ease 0s"
					sm-margin="0px 0px 0px 24px"
					height="100% border-box"
					min-height="fit-content"
					target="_blank"
				>
					AISC
				</Link>
			</Box>
		</Section>
		<Section
			color="#2e2e2e"
			display="flex"
			overflow-x="visible"
			overflow-y="visible"
			align-items="flex-start"
			max-height="100%"
			min-height="fit-content"
			height="100%"
			text-align="center"
			background="url(https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20what%20we%20offer%20cube%20bg.png?v=2024-01-08T05:40:29.141Z) 100% 50%/cover"
			padding="124px 160px 148px 160px"
			quarkly-title="What We Offer + Past Highlights"
			justify-content="center"
			max-width="100%"
			width="100% border-box"
			sm-padding="84px 36px 100px 36px"
			sm-height="fit-content"
			sm-background="url(https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20what%20we%20offer%20cube%20bg.png?v=2024-01-08T05:40:29.141Z) 100%/cover"
		>
			<Override
				slot="SectionContent"
				align-items="flex-start"
				flex-direction="column"
				margin="0px 0 0px 0"
				max-width="fit-content"
				width="auto"
			/>
			<Text
				margin="0px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="--light"
				text-align="center"
				font="normal 500 36px --fontFamily-sans"
				padding="0px 0px 80px 0px"
				min-width="fit-content"
				sm-margin="0px 0px 64px 0px"
				sm-padding="0px 0px 0 0px"
			>
				What We Offer
			</Text>
			<Section
				padding="0px 0px 184px 0px"
				justify-content="space-between"
				width="100% border-box"
				display="flex"
				max-width="fit-content"
				min-width="100%"
				quarkly-title="What We Offer"
				sm-margin="0 0 164px 0"
				sm-padding="0px 0px 0 0px"
			>
				<Override
					slot="SectionContent"
					margin="0px 0 0px 0"
					align-items="center"
					flex-direction="row"
					justify-content="space-between"
					width="auto"
					max-width="100%"
					min-width="fit-contentmin-content"
					sm-width="100% border-box"
					sm-flex-wrap="wrap"
					sm-height="fit-content"
					flex-wrap="wrap"
					height="fit-content"
					min-height="fit-content"
				/>
				<Box
					min-width="100px"
					min-height="100px"
					display="block"
					max-width="min-content"
					max-height="fit-content"
					padding="0 0 0 0"
					width="auto"
					sm-width="100% border-box"
					sm-margin="0px 0 64px 0px"
					sm-max-width="100%"
					margin="0px 24px 24px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04:51:23.602Z"
						display="block"
						width="220px"
						height="auto"
						min-height="100%"
						padding="0px 0px 48px 0px"
						object-fit="contain"
						min-width="100%100%"
						filter="--grayscale"
						sm-width="100% border-box"
						sm-min-width="100%"
						sm-margin="0px 0px 24px 0px"
						sm-padding="0px 0px 0 0px"
						srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20networking%20events.png?v=2024-01-08T04%3A51%3A23.602Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0px 0px 16px 0px"
						color="#51B7FF"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 0 0px"
						sm-width="100% border-box"
						sm-height="fit-content"
						sm-padding="0px 0px 8px 0px"
					>
						NETWORKING EVENTS
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						text-align="left"
						font="200 18px sans-serif"
						width="fit-content"
						sm-width="100% border-box"
						sm-height="fit-content"
					>
						Forge valuable connections and broaden your horizons
					</Text>
				</Box>
				<Box
					min-height="100%"
					max-height="fit-content"
					width="auto"
					height="auto"
					padding="0 0 0 0"
					max-width="min-content"
					min-width="100%100%"
					sm-margin="0px 0 64px 0px"
					sm-height="fit-contentauto"
					sm-max-width="100%"
					margin="0px 24px 24px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04:51:23.617Z"
						display="block"
						min-width="none"
						min-height="100%"
						padding="0px 0px 48px 0px"
						height="auto"
						width="220px"
						filter="--grayscale"
						sm-width="100% border-box"
						sm-min-width="100%"
						sm-padding="0px 0px 0 0px"
						sm-margin="0px 0px 24px 0px"
						srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20technical%20consulting.png?v=2024-01-08T04%3A51%3A23.617Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0px 0px 16px 0px"
						color="#51B7FF"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 0 0px"
						sm-padding="0px 0px 0 0px"
						sm-margin="0px 0px 8px 0px"
					>
						TECHNICAL CONSULTING
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						text-align="left"
						font="200 18px sans-serif"
						width="fit-content"
					>
						Unlock your potential with hands-on technical guidance and mentorship
					</Text>
				</Box>
				<Box
					min-height="100%"
					max-height="fit-content"
					width="auto"
					height="auto"
					padding="0 0 0 0"
					max-width="min-content"
					min-width="100%100%"
					sm-margin="0px 0 64px 0px"
					sm-width="100% border-box"
					sm-min-width="100%"
					margin="0px 24px 24px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04:51:23.614Z"
						display="block"
						min-width="100%100%"
						min-height="100%"
						padding="0px 0px 48px 0px"
						height="auto"
						width="220px"
						filter="--grayscale"
						sm-width="100% border-box"
						sm-min-width="100%"
						sm-padding="0px 0px 0 0px"
						sm-margin="0px 0px 24px 0px"
						srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20case%20comps.png?v=2024-01-08T04%3A51%3A23.614Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0px 0px 16px 0px"
						color="#51B7FF"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 0 0px"
						sm-margin="0px 0px 8px 0px"
						sm-padding="0px 0px 0 0px"
					>
						CASE COMPETITIONS
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						text-align="left"
						font="200 18px sans-serif"
						width="fit-content"
					>
						Sharpen your problem-solving skills and compete at the forefront of AI innovation
					</Text>
				</Box>
				<Box
					min-height="100%"
					max-height="fit-content"
					width="auto"
					height="auto"
					padding="0 0 0 0"
					max-width="min-content"
					min-width="100%100%"
					sm-width="100% border-box"
					sm-min-width="100%"
					margin="0px 0 24px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04:51:23.598Z"
						display="block"
						min-width="100%100%"
						min-height="100%"
						padding="0px 0px 48px 0px"
						height="auto"
						width="220px"
						filter="--grayscale"
						sm-width="100% border-box"
						sm-margin="0px 0px 24px 0px"
						sm-min-width="100%"
						sm-padding="0px 0px 0 0px"
						srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20davis%20workshops.png?v=2024-01-08T04%3A51%3A23.598Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0px 0px 16px 0px"
						color="#51B7FF"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 0 0px"
						sm-margin="0px 0px 8px 0px"
						sm-padding="0px 0px 0 0px"
					>
						DYNAMIC WORKSHOPS
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						text-align="left"
						font="200 18px sans-serif"
						width="fit-content"
					>
						Collaborate with peers and gain insights through interactive workshops
					</Text>
				</Box>
			</Section>
		</Section>
		<Section
			color="#2e2e2e"
			display="flex"
			overflow-x="visible"
			overflow-y="visible"
			align-items="flex-start"
			max-height="100%"
			min-height="fit-content"
			height="100%"
			text-align="center"
			padding="100px 160px 124px 160px"
			quarkly-title="Upcoming Events"
			justify-content="center"
			max-width="100%"
			width="100% border-box"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20website%20what%20we%20offer%20bg.png?v=2024-01-08T04:25:15.313Z) 0% 0% /cover repeat scroll padding-box"
			sm-padding="84px 36px 84px 36px"
		>
			<Override
				slot="SectionContent"
				align-items="flex-start"
				flex-direction="column"
				margin="0px 0 0px 0"
				max-width="none"
				width="100%"
				sm-height="auto"
				sm-min-height="fit-content"
				sm-margin="0 0 0px 0"
			/>
			<Text
				margin="0px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="--light"
				text-align="center"
				font="normal 500 36px --fontFamily-sans"
				padding="0px 0px 16px 0px"
				min-width="fit-content"
				sm-padding="0px 0px 0 0px"
				sm-margin="0px 0px 16px 0px"
			>
				Upcoming Events
			</Text>
			<Text
				margin="0px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="rgb(204,204,204)"
				text-align="center"
				font="normal 300 24px --fontFamily-sans"
				padding="0px 0px 100px 0px"
				min-width="fit-content"
				sm-text-align="left"
				sm-padding="0px 0px 0 0px"
				sm-margin="0px 0px 64px 0px"
			>
				Stay tuned on{" "}
				<Link
					color="rgb(204,204,204)"
					href="https://www.instagram.com/aiscuw/?hl=en"
					target="_blank"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					hover-color="--aiscDavisPink"
					active-color="--aiscDavisPink"
				>
					Instagram
				</Link>
				{" "}for the latest details!{" "}
			</Text>
			<Section
				padding="0px 0px 0 0px"
				justify-content="space-between"
				width="100% border-box"
				display="flex"
				max-width="fit-content"
				min-width="100%"
				quarkly-title="Events"
				align-items="flex-start"
				margin="0 0 0 0"
				sm-height="fit-content"
				sm-min-height="fit-content"
				sm-margin="0 0 0 0"
			>
				<Override
					slot="SectionContent"
					margin="0px 0 0px 0"
					align-items="flex-start"
					flex-direction="row"
					justify-content="space-between"
					max-width="100%"
					min-width="100%"
					sm-flex-wrap="wrap"
					flex-wrap="wrap"
					width="100% border-box"
					sm-justify-content="space-between"
				/>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					quarkly-title="Event"
					min-width="184px"
					margin="0 48px 48px 0"
					width="184px"
					max-width="184px"
					min-height="fit-content"
					height="fit-content"
					sm-width="132px"
					sm-min-width="132px"
					sm-max-width="132px"
					sm-margin="0 16px 48px 0"
				>
					<Text
						margin="0px 0px 24px 0px"
						color="--aiscDavisBlack"
						text-align="left"
						font="400 12px/150% sans-serif"
						width="fit-content"
						background="#51B7FF"
						padding="4px 12px 4px 12px"
						border-radius="4px"
					>
						Week 1
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 12px 0px"
					>
						AISC Kickoff
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						text-align="left"
						font="200 18px/130% sans-serif"
						width="fit-content"
						padding="0px 0px 12px 0px"
						min-width="fit-content"
						max-width="fit-content"
					>
						Winter Quarter
					</Text>
				</Box>
			</Section>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66b57a1ac2c6080018ead5df"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});