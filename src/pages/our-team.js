import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"our-team"} />
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
					href="/"
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
					quarkly-title="Home"
				>
					Our Team
				</Link>
				<Link
					href="/programs"
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
					quarkly-title="Our Programs"
				>
					Our Programs
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
		<Section background="rgb(36,36,36)" padding="90px 0 120px 0" quarkly-title="Team-5">
			<Text margin="0px 0px 0px 0px" color="--light" text-align="left" font="600 48px --fontFamily-sans">
				Our team
			</Text>
			<Text
				margin="25px 600px 0px 0px"
				text-align="left"
				color="#b2bdc6"
				font="300 22px/150% --fontFamily-sansHelvetica"
				lg-margin="25px 0 0px 0px"
			>
				Say hello to the AISC team at UW!
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				margin="70px 0px 0px 0px"
				grid-template-columns="repeat(4, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="40px 35px"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="repeat(4, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
			>
				<Box min-width="100px" min-height="100px" display="flex" flex-direction="column">
					<Image
						display="block"
						width="100%"
						border-radius="18px"
						src="https://uploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00:19:42.565Z"
						srcSet="https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/IMG_4466.jpg?v=2024-10-07T00%3A19%3A42.565Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Vikram Murali
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						President
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image display="block" width="100%" border-radius="18px" />
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Akshita Amarnath
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Vice-President
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image display="block" width="100%" border-radius="18px" />
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Parshvi Balu
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Director of Outreach
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image display="block" width="100%" border-radius="18px" />
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Siddharth Saraf
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Director of Events
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
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});