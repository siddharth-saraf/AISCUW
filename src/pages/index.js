import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				AISC UW
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"AISC UW"} />
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
			<Link href="#">
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
			</Link>
			<Box
				min-width="100px"
				min-height="fit-content"
				quarkly-title="Pages"
				sm-height="fit-content"
				sm-min-height="fit-content"
				height="fit-content"
			>
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
					href="https://aiscuw.netlify.app/our-team/"
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
					quarkly-title="Our Team"
				>
					Our Team
				</Link>
			</Box>
		</Section>
		<Section
			background="#000000 url(https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Hero%20Image.png?v=2023-11-07T21:35:08.566Z) 0% 0%/cover no-repeat scroll"
			color="--aiscDavisBlack"
			display="flex"
			height="100%"
			overflow-x="visible"
			overflow-y="visible"
			min-height="800px"
			justify-content="center"
			align-items="center"
			quarkly-title="Hero"
			max-height="100%"
			sm-background="url(https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Hero%20Image.png?v=2023-11-07T21:35:08.566Z) 50% 0%/cover no-repeat scroll"
			sm-padding="0 0 0 0"
			sm-min-height="700px"
		>
			<Override slot="SectionContent" padding="0px 0px 200px 0px" sm-padding="0px 0px 164px 0px" />
			<Text
				margin="0px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="--light"
				text-align="center"
				font="normal 500 48px --fontFamily-sans"
				sm-font="normal 500 40px --fontFamily-sans"
			>
				AI STUDENT COLLECTIVE
			</Text>
			<Text
				margin="0px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="--light"
				text-align="center"
				font="normal 200 48px --fontFamily-sans"
				sm-font="normal 200 40px --fontFamily-sans"
			>
				@ UW
			</Text>
			<Text
				margin="40px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="#51B7FF"
				text-align="center"
				font="normal 300 24px --fontFamily-sans"
				sm-padding="0px 48px 0px 48px"
			>
				Creating a future of AI literacy for all
			</Text>
		</Section>
		<Section
			color="#242424"
			display="flex"
			overflow-x="visible"
			overflow-y="visible"
			justify-content="center"
			align-items="center"
			max-height="100%"
			min-height="fit-content"
			height="100% border-box"
			text-align="center"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/aisc%20website%20about%20us%20bg.png?v=2024-01-08T04:01:51.382Z) 0% 0%/cover"
			padding="50px 0 150px 0"
			quarkly-title="About Us"
			sm-padding="48px 0 84px 0"
			sm-width="100%"
			sm-min-width="100%"
			sm-max-width="100%"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="1152px"
				sm-width="100%"
				sm-min-width={0}
				sm-max-width="100%"
				sm-padding="0px 36px 0px 36px"
			/>
			<Text
				margin="0px 64px 0px 64px"
				background="rgba(0, 0, 0, 0)"
				color="--light"
				text-align="center"
				font="normal 500 36px --fontFamily-sans"
				sm-font="normal 500 32px --fontFamily-sans"
				sm-width="100% border-box"
				sm-margin="0px 0 0px 0"
				sm-min-width="fit-content"
			>
				Welcome to the AI Student Collective{" "}
				<br />
				(AISC) @ UW!
			</Text>
			<Text
				margin="40px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="#cccccc"
				text-align="center"
				font="normal 200 24px --fontFamily-sans"
				max-width="70%"
				sm-width="100% border-box"
				sm-max-width="100%"
				sm-min-width="fit-content"
				sm-font="normal 200 20px --fontFamily-sans"
			>
				We're on a passionate mission to shape a future of AI literacy for all by empowering students from diverse backgrounds to thrive in the AI landscape.
				<br />
				<br />
				We offer exciting opportunities for involvement in technical, creative, and business roles. Join us in the AI revolution and be part of something extraordinary.
			</Text>
			<Image
				src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22:40:38.455Z"
				display="block"
				padding="0px 0px 0 0px"
				sm-width="100% border-box"
				sm-padding="24px 0px 0 0px"
				sm-min-width="100%"
				sm-max-width="100%"
				width="700px"
				md-min-width="50% content-box"
				md-width="700px"
				lg-min-width="50% content-box"
				xl-min-width="50% content-box"
				min-width="50% content-box"
				height="auto"
				xl-height="auto"
				flex="0 0 auto"
				margin="16px 0px 0px 0px"
				srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22%3A40%3A38.455Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section
			color="#2e2e2e"
			display="flex"
			overflow-x="visible"
			overflow-y="visible"
			max-height="100%"
			min-height="fit-content"
			height="100%"
			text-align="center"
			quarkly-title="Pillars"
			width="100% border-box"
			padding="64px 160px 72px 160px"
			max-width="100%"
			flex-direction="row"
			background="rgb(46,46,46)"
			sm-padding="84px 36px 100px 36px"
		>
			<Override
				slot="SectionContent"
				align-items="flex-start"
				flex-direction="row"
				margin="0px 0px 0px 0"
				max-width="none"
				width="100% border-box"
				md-overflow-x="auto"
				lg-flex-wrap="wrap"
				display="flex"
				min-width="100%"
				justify-content="space-between"
				flex-wrap="wrap"
			/>
			<Text
				margin="0px 0px 0px 0px"
				background="rgba(0, 0, 0, 0)"
				color="--light"
				text-align="center"
				font="normal 500 36px --fontFamily-sans"
				min-width="fit-content"
				display="flex"
				width="fit-content"
				padding="0px 0px 80px 0px"
				sm-text-align="left"
				sm-width="100% border-box"
				sm-padding="0px 0px 0 0px"
				sm-margin="0px 0px 80px 0px"
			>
				Our 3 Pillars
			</Text>
			<Box
				min-width="none"
				min-height="100px"
				display="flex"
				justify-content="space-between"
				width="auto"
				max-width="none"
				flex-direction="row"
				padding="0px 0px 0px 0px"
				flex-wrap="wrap"
				sm-flex-direction="column"
				sm-width="100% border-box"
				sm-height="fit-content"
			>
				<Box
					min-height="100px"
					width="fit-content"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					quarkly-title="Accessibility"
					height="fit-content"
					margin="12px 60px 0px 0px"
					sm-width="auto"
					sm-margin="0 0 48px 0px"
					sm-padding="0px 0px 0 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						quarkly-title="Header"
						sm-display="flex"
						sm-align-items="center"
						sm-justify-content="flex-start"
						sm-height="fit-content"
						sm-min-height="fit-content"
						sm-margin="0px 0px 16px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00:10:22.634Z"
							display="block"
							height="30px"
							padding="0px 0px 48px 0px"
							width="100% border-box"
							sm-width="100% border-box"
							sm-padding="0px 0px 0 0px"
							sm-margin="0px 16px 0px 0px"
							sm-height="24px"
							srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00%3A10%3A22.634Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Text
							margin="0px 0px 0px 0px"
							color="--light"
							text-align="left"
							font="500 20px sans-serif"
							padding="0px 0px 12px 0px"
							width="fit-content"
							sm-width="100% border-box"
							sm-height="fit-content"
							sm-display="flex"
							sm-padding="0px 0px 0 0px"
						>
							ACCESSIBILITY
						</Text>
					</Box>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						font="200 18px sans-serif"
						text-align="left"
						padding="0px 0px 0px 0px"
						width="148px"
						sm-width="auto"
						sm-min-width="8px"
						background="rgba(46,46,46)"
					>
						Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity
					</Text>
				</Box>
				<Box
					min-height="100px"
					width="fit-content"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					quarkly-title="Literacy"
					height="fit-content"
					margin="12px 48px 0px 0px"
					sm-width="auto"
					sm-margin="0 0 48px 0px"
					sm-padding="0px 0px 0 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						quarkly-title="Header"
						sm-display="flex"
						sm-align-items="center"
						sm-justify-content="flex-start"
						sm-height="fit-content"
						sm-min-height="fit-content"
						sm-margin="0px 0px 16px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00:10:54.858Z"
							display="block"
							height="30px"
							padding="0px 0px 48px 0px"
							sm-padding="0px 0px 0 0px"
							sm-margin="0px 16px 0px 0px"
							sm-height="24px"
							srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00%3A10%3A54.858Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Text
							margin="0px 0px 0px 0px"
							color="--light"
							text-align="left"
							font="500 20px sans-serif"
							padding="0px 0px 12px 0px"
							width="fit-content"
							sm-width="100% border-box"
							sm-height="fit-content"
							sm-display="flex"
							sm-padding="0px 0px 0 0px"
						>
							LITERACY
						</Text>
					</Box>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						font="200 18px sans-serif"
						text-align="left"
						padding="0px 0px 0px 0px"
						width="148px"
						sm-width="auto"
						sm-min-width="8px"
						background="rgba(46,46,46)"
					>
						Empowering students with enriching resources and experiences to shape the future
					</Text>
				</Box>
				<Box
					min-height="100px"
					width="fit-content"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					quarkly-title="Diversity"
					height="fit-content"
					margin="12px 0 0px 0px"
					sm-width="auto"
					sm-margin="0 0 0 0px"
					sm-padding="0px 0px 0 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						quarkly-title="Header"
						sm-display="flex"
						sm-align-items="center"
						sm-justify-content="flex-start"
						sm-height="fit-content"
						sm-min-height="fit-content"
						sm-margin="0px 0px 16px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00:11:12.221Z"
							display="block"
							height="30px"
							padding="0px 0px 48px 0px"
							sm-padding="0px 0px 0 0px"
							sm-margin="0px 16px 0px 0px"
							sm-height="24px"
							srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00%3A11%3A12.221Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Text
							margin="0px 0px 0px 0px"
							color="--light"
							text-align="left"
							font="500 20px sans-serif"
							padding="0px 0px 12px 0px"
							width="fit-content"
							sm-width="100% border-box"
							sm-height="fit-content"
							sm-display="flex"
							sm-padding="0px 0px 0 0px"
						>
							DIVERSITY
						</Text>
					</Box>
					<Text
						margin="0px 0px 0px 0px"
						color="rgb(204,204,204)"
						font="200 18px sans-serif"
						text-align="left"
						padding="0px 0px 0px 0px"
						width="148px"
						sm-width="auto"
						sm-min-width="8px"
						background="rgba(46,46,46)"
					>
						Celebrating diversity in AI, fostering innovation through varied perspectives
					</Text>
				</Box>
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
				Upcoming Events for Spring 2025
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
						Spring Kickoff & Project Cycles
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
						Wed, 4/2
						<br />
						5:00-6:30pm
						<br />
					</Text>
				</Box>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					quarkly-title="Event"
					margin="0 48px 48px 0"
					width="184px"
					min-width="184px"
					max-width="184px"
					min-height="fit-content"
					height="fit-content"
					sm-width="132px"
					sm-min-width="132px"
					sm-max-width="132px"
					sm-margin="0 0 48px 0"
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
						Week 2
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 8px 0px"
					>
						Industry Night:{" "}
						<br />
						AISC x SPACE
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
						Mon, 4/7
						<br />
						5-7pm
					</Text>
				</Box>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					width="184px"
					quarkly-title="Event"
					margin="0 48px 48px 0"
					min-width="184px"
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
						Week 3
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 8px 0px"
						overflow-x="visible"
					>
						Husky Hacks: AI Product Hackathon
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
						Sat-Sun, 4/19-4/20
						<br />
						9am-6pm
						<br />
					</Text>
				</Box>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					width="184px"
					quarkly-title="Event"
					xl-margin="0px 24px 0px 0px"
					margin="0 48px 48px 0"
					min-width="184px"
					max-width="184px"
					min-height="fit-content"
					height="fit-content"
					sm-width="132px"
					sm-min-width="132px"
					sm-max-width="132px"
					sm-margin="0 0 48px 0"
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
						Week 7
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 8px 0px"
					>
						Women in AI
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
						TBD
					</Text>
				</Box>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					width="184px"
					quarkly-title="Event"
					margin="0 48px 48px 0"
					xl-margin="0px 0 0px 0px"
					min-width="184px"
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
						Week 8
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 12px 0px"
					>
						Project Cycles Demo Day
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
						TBD
					</Text>
				</Box>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					width="184px"
					quarkly-title="Event"
					margin="0 48px 48px 0"
					min-width="184px"
					max-width="184px"
					min-height="fit-content"
					height="fit-content"
					sm-width="132px"
					sm-min-width="132px"
					sm-max-width="132px"
					sm-margin="0 0 48px 0"
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
						Week 9
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="left"
						font="500 20px sans-serif"
						padding="0px 0px 8px 0px"
					>
						Healthcare Fireside Chat
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
						TBD
					</Text>
				</Box>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					width="184px"
					quarkly-title="Event"
					margin="0 48px 48px 0"
					min-width="184px"
					max-width="184px"
					min-height="fit-content"
					height="fit-content"
					sm-width="132px"
					sm-min-width="132px"
					sm-max-width="132px"
					sm-margin="0 16px 48px 0"
				/>
				<Box
					display="block"
					max-height="fit-content"
					padding="0 0 0 0"
					width="184px"
					quarkly-title="Event"
					min-width="184px"
					max-width="184px"
					margin="0 48px 48px 0"
					min-height="fit-content"
					height="fit-content"
					sm-width="132px"
					sm-min-width="132px"
					sm-max-width="132px"
					sm-margin="0 0 48px 0"
				/>
			</Section>
		</Section>
		<Section
			padding="64px 160px 72px 160px"
			sm-padding="48px 36px 24px 36px"
			color="--aiscDavisBlack"
			quarkly-title="Footer"
			background="rgb(36,36,36)"
			width="100% border-box"
			sm-width="100% border-box"
		>
			<Override
				slot="SectionContent"
				flex-direction="column"
				justify-content="space-between"
				width="100%"
				sm-flex-wrap="wrap"
			/>
			<Box
				min-width="100px"
				min-height="fit-content"
				display="flex"
				justify-content="space-between"
				sm-flex-direction="column"
				align-items="flex-start"
				height="auto"
				width="100% border-box"
				margin="0px 0px 148px 0px"
				sm-margin="0px 0px 64px 0px"
			>
				<Box
					min-width="100px"
					min-height="fit-content"
					quarkly-title="Newsletter"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					width="100% border-box"
					margin="0px 48px 0px 0"
					height="auto"
					padding="0px 0px 0px 0px"
					align-items="stretch"
					sm-margin="0px 0px 64px 0px"
					sm-min-width="100%"
				>
					<Box
						min-width="100px"
						min-height="fit-content"
						quarkly-title="Text"
						height="fit-content"
						margin="0px 0px 64px 0px"
						sm-width="100% border-box"
						sm-min-width="100%"
						sm-margin="0px 0px 24px 0px"
					>
						<Text margin="0px 0px 16px 0px" font="500 20px sans-serif" color="rgb(109,181,249)" padding="0px 0px 0 0px">
							JOIN OUR NEWSLETTER
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="200 18px sans-serif"
							color="rgb(204,204,204)"
							padding="0px 0px 0 0px"
							sm-width="100% border-box"
						>
							Get weekly club updates, AI news, and resources for learning more about AI.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="fit-content"
						quarkly-title="Form"
						height="fit-content"
						display="flex"
						sm-width="100% border-box"
						sm-flex-wrap="wrap"
						sm-justify-content="space-between"
					>
						<Input
							display="block"
							placeholder-color="rgb(204,204,204)"
							border-radius="4px"
							border-width="1px"
							placeholder-font="normal 200 14px/2 sans-serif"
							type="email"
							placeholder="Enter your email..."
							required
							color="--light"
							margin="0px 16px 0px 0px"
							width="300px"
							font="normal 300 14px/1.5 sans-serif"
							hover-font="normal 300 14px/1.5 sans-serif"
							border-color="--color-aiscDavisLightGray"
							hover-border-color="--color-light"
							sm-margin="0px 0px 16px 0px"
							sm-width="100% border-box"
							sm-height="42px"
							sm-min-width="100%"
							background="--color-aiscDavisBlack"
						/>
						<Button
							border-radius="4px"
							font="normal 300 16px/1.5 sans-serif"
							color="--light"
							border-width="1px"
							border-color="--color-aiscDavisPink"
							border-style="solid"
							background="--color-aiscDavisPink"
							hover-background="#e7369a"
							hover-color="--light"
							transition="all 0.1s ease 0s"
							sm-height="42px"
							sm-width="100% border-box"
							sm-min-width="100%"
							focus-background="#e7369a"
							focus-color="--aiscDavisBlack"
							active-color="--dark"
							active-background="#e7369a"
							active-transition="all 0.1s ease 0s"
							sm-active-transition="all 0.1s --transitionTimingFunction-sharp 0s"
							hover-transition="all 0.1s ease 0s"
							sm-active-background="#e7369a"
							sm-hover-background="#e7369a"
							sm-focus-background="#e7369a"
						>
							Subscribe
						</Button>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="fit-content"
					quarkly-title="Socials"
					display="flex"
					flex-direction="column"
					height="fit-content"
					width="fit-content"
					lg-width="auto"
					xl-width="auto"
					margin="0px 24px 0px 0px"
				>
					<Text margin="0px 0px 16px 0px" color="rgb(109,181,249)" font="500 20px sans-serif">
						CONTACT
					</Text>
					<Link
						href="https://www.instagram.com/aiscuw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
						color="rgb(204,204,204)"
						font="200 18px sans-serif"
						padding="0px 0px 8px 0px"
						hover-color="#FF43AD"
						transition="all 0.3s ease 0s"
						target="_blank"
						border-color="rgb(204,204,204)"
						text-decoration-line="initial"
					>
						Instagram
					</Link>
					<Link
						href="https://www.linkedin.com/company/ai-student-collective-uw/"
						color="rgb(204,204,204)"
						font="200 18px sans-serif"
						padding="0px 0px 8px 0px"
						hover-color="#FF43AD"
						transition="all 0.3s ease 0s"
						target="_blank"
						text-decoration-line="initial"
					>
						LinkedIn
					</Link>
					<Link
						href="mailto:aisc@uw.edu"
						color="rgb(204,204,204)"
						font="200 18px sans-serif"
						padding="0px 0px px 0px"
						hover-color="#FF43AD"
						transition="all 0.3s ease 0s"
						target="_self"
						text-decoration-line="initial"
					>
						Email
					</Link>
				</Box>
			</Box>
			<Box
				min-width="100px"
				quarkly-title="Logo"
				display="flex"
				flex-direction="row"
				height="fit-content"
				margin="0px 0px 0 0px"
				align-items="center"
				flex-wrap="wrap"
				xl-width="fit-content"
				xl-flex-direction="row"
				lg-width="fit-content"
				sm-height="fit-content"
				sm-margin="0px 0px 0 0px"
				justify-content="center"
				min-height="fit-content"
				sm-width="100% border-box"
			>
				<Image
					src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22:12:47.498Z"
					display="block"
					width="32px"
					padding="0px 0px px 0px"
					height="32px"
					margin="0px 16px 24px 0px"
					min-height="32px"
					min-width="32px"
					srcSet="https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22%3A12%3A47.498Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					min-width="fit-content"
					quarkly-title="Text"
					display="flex"
					flex-direction="row"
					height="fit-content"
					margin="0px 0px 24px 0px"
					lg-width="fit-content"
					xl-width="fit-content"
				>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						font="500 24px sans-serif"
						min-width="fit-content"
						lg-width="fit-content"
						xl-width="fit-content"
					>
						AISC{" "}
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						font="100 24px sans-serif"
						min-width="fit-content"
						lg-width="fit-content"
						xl-width="fit-content"
					>
						@ UW
					</Text>
				</Box>
			</Box>
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
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n#gatsby-focus-wrapper>a{\n display: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});