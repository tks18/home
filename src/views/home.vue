<template>
	<div class="columns is-multiline">
		<div class="column is-full">
			<div
				:class="
					'hero is-fullheight' +
					($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
				"
			>
				<div
					:class="'hero-body' + (ismobile ? ' ma-1 px-0 py-3' : ' ma-2 pa-8')"
				>
					<div class="container">
						<div class="columns is-multiline is-centered is-vcentered">
							<div class="column is-full">
								<div
									:class="
										'text text-center font-weight-bold' +
										(ismobile ? ' text-h4' : ' text-h2')
									"
								>
									Designer, Front-end & Backend Developer
								</div>
								<div
									:class="
										'text text-center font-weight-bold' +
										(ismobile ? ' text-caption' : ' text-body-1')
									"
								>
									I design and code beautifully simple things, and I love what I
									do.
								</div>
							</div>
							<div class="column has-text-centered is-half ma-2">
								<v-avatar :size="ismobile ? 250 : 380">
									<v-img :src="heroData.image" alt="Main Image" />
								</v-avatar>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="column is-full ma-2">
			<v-row>
				<v-col align="start" justify="start">
					<div
						@click="$router.push('/blog')"
						:class="
							'text-h5 non-touch point-cursor ml-6' +
							($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
						"
					>
						My Blog <v-icon>mdi-arrow-right-circle</v-icon>
					</div>
				</v-col>
				<v-col align="end" justify="start" class="mr-4">
					<v-btn icon color="primary" @click="swipeLeft('posts')"
						><v-icon>mdi-arrow-left</v-icon></v-btn
					>
					<v-btn icon color="primary" @click="swipeRight('posts')"
						><v-icon>mdi-arrow-right</v-icon></v-btn
					>
				</v-col>
			</v-row>
			<div
				class="scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"
				ref="posts"
			>
				<div
					v-for="n in 10"
					class="scrollable-x-child column ma-0 pa-0 non-touch point-cursor"
					v-bind:key="n"
				>
					<v-hover>
						<template v-slot:default="{ hover }">
							<v-card
								elevation="3"
								v-ripple
								class="mx-2"
								:width="ismobile ? 225 : 250"
								:height="ismobile ? 300 : 325"
							>
								<v-card>
									<v-img
										src="https://i.ibb.co/BftbgSg/download-force-true-w-1920.jpg"
									></v-img>
								</v-card>
								<v-card-text>
									<h2 class="text-subtitle-1 font-weight-bold primary--text">
										This is a Lorem Ipsum Post
									</h2>
								</v-card-text>
								<transition name="zoomUp" mode="out-in">
									<v-overlay
										v-if="hover"
										absolute
										z-index="2"
										opacity="0.4"
										color="primary"
										class="back-blur"
									>
										<v-row class="mx-3">
											<v-col>
												<v-row align="start">
													<div
														class="text text-body-1 font-weight-bold black--text"
													>
														Overview
													</div>
												</v-row>
												<v-row align="start" justify="start">
													Lorem ipsum, dolor sit amet consectetur adipisicing
													elit. A necessitatibus, molestiae magni deleniti hic
													natus facilis.
												</v-row>
												<v-spacer></v-spacer>
												<v-row class="mt-1">
													<v-btn color="primary" small>Read More</v-btn>
												</v-row>
											</v-col>
										</v-row>
									</v-overlay>
								</transition>
							</v-card>
						</template>
					</v-hover>
				</div>
			</div>
		</div>
		<div class="column is-full my-1 py-1">
			<v-container>
				<v-row class="my-0 py-0">
					<v-col cols="12" class="my-0 mx-2 px-2 py-0">
						<div
							@click="$router.push('/about')"
							:class="
								'text-h5 non-touch point-cursor' +
								($vuetify.theme.dark ? ' underhover-light' : ' underhover-dark')
							"
						>
							About Me <v-icon>mdi-arrow-right-circle</v-icon>
						</div>
					</v-col>
					<v-col cols="12" class="my-0 py-0">
						<v-row align="center" justify="center">
							<v-col :cols="ismobile ? 12 : 9" align="start" justify="center">
								<v-row align="start" justify="start" class="my-0 py-0">
									<div
										class="text font-weight-semibold mx-2 px-2"
										v-html="heroData.subtitle"
									></div>
								</v-row>
								<v-row align="end" justify="end" class="my-1 mx-2 px-2 py-1">
									<v-btn color="primary">
										<v-icon>mdi-text-box-multiple</v-icon>{{ " Read More" }}
									</v-btn>
								</v-row>
							</v-col>
							<v-col
								class="my-0 py-0"
								v-if="!ismobile"
								cols="3"
								align="center"
								justify="center"
							>
								<v-avatar
									size="220"
									:class="
										$vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light'
									"
								>
									<v-img :src="aboutData.image"></v-img>
								</v-avatar>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</div>
		<div class="column is-full">
			<v-container>
				<v-timeline>
					<v-timeline-item v-for="year in 5" :key="year" color="red">
						<template v-slot:opposite>
							<span
								class="headline font-weight-bold cyan--text"
								v-text="2020"
							></span>
						</template>
						<div class="py-4">
							<h2 class="headline font-weight-bold cyan--text">Lorem ipsum</h2>
							<div>
								Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
								scaevola imperdiet nec ut, sed euismod convenire principes at.
								Est et nobis iisque percipit, an vim zril disputando
								voluptatibus, vix an salutandi sententiae.
							</div>
						</div>
					</v-timeline-item>
				</v-timeline>
			</v-container>
		</div>
	</div>
</template>

<script>
	import { scrollTo } from "../plugins/helpers";
	export default {
		data: function () {
			return {
				heroData: {
					title: "Hello There !",
					image: "https://i.ibb.co/GTcS2kb/profile.png",
					subtitle: `<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI's. I Love Javascript, Nodejs & Flutter. Its Been a Great Journey for the Past 3 Years of Self-learning Web development and Creating Amazing Websites. Currently Focussing More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent.I am Pursuing Chartered Accountancy Course as my Profession.`,
					rounded: true,
					buttonUrl: "/about",
					buttontext: "Contact Me !",
				},
				aboutData: {
					image: "https://i.ibb.co/VVxzT9s/profile-2.jpg",
				},
			};
		},
		methods: {
			swipeLeft(func) {
				const content = "this.$refs." + func;
				scrollTo(eval(content), -400, 300);
			},
			swipeRight(func) {
				const content = "this.$refs." + func;
				scrollTo(eval(content), 400, 300);
			},
		},
		computed: {
			ismobile() {
				var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
				if (width > 966) {
					return false;
				} else {
					return true;
				}
			},
		},
	};
</script>

<style></style>
