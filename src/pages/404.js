import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				AISC UW
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"AISC UW"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-6">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Image margin="0px 0px 7px 0px" src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00:16:56.957Z" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00%3A16%3A56.957Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
				<Text color="--dark" margin="0px 0px 24px 0px" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif" font="--headline1">
					404 Error!
				</Text>
				<Text
					width="40%"
					lg-width="80%"
					font="--lead"
					color="--grey"
					margin="0px 0px 40px 0px"
					text-align="center"
				>
					The page you are looking for is not available or doesn’t belong to this website!
				</Text>
				<Link
					font="--lead"
					padding="12px 24px 12px 24px"
					background="--color-dark"
					border-radius="8px"
					href="https://aiscuw.netlify.app"
					text-decoration-line="initial"
					color="--light"
				>
					Go Back to Home
				</Link>
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