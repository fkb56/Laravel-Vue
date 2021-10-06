<template>
	<div class="items-center w-full fixed top-0">
		<div
			class="
				bg-white
				border
				transition
				duration-500
				ease-in-out
				transform
				text-blueGray-700
			"
		>
			<div
				class="
					flex flex-row flex-wrap
					justify-between
					items-center
					px-5
					py-1
					mx-auto
					md:flex-row
				"
			>
				<nav
					class="flex flex-wrap justify-start items-center text-base"
				>
					<ul
						class="
							inline-block
							items-center
							list-none
							lg:inline-flex
						"
					>
						<li>
							<!-- TODO enlever hover du boutton contact -->
							<router-link
								:to="{ name: 'about' }"
								class="
									py-1
									m-1
									text-base
									rounded-md
									transition
									duration-500
									ease-in-out
									transform
									text-blueGray-500
									focus:shadow-outline focus:outline-none
									hover:text-black
								"
								>About</router-link
							>
						</li>
					</ul>
				</nav>
				<router-link
					:to="{ name: 'home' }"
					class="
						justify-center
						focus:outline-none
						md:ml-auto md:mr-auto
					"
				>
					<h2
						class="
							block
							p-2
							text-xl
							font-medium
							tracking-tighter
							text-black
							transition
							duration-500
							ease-in-out
							transform
							cursor-pointer
							hover:text-blueGray-500
							lg:text-x lg:mr-8
						"
					>
						Home
					</h2>
				</router-link>
				<!--				<inertia-link :href="route('login')">-->
				<!--					<i class="far fa-user"></i>-->
				<!--				</inertia-link>-->
				<router-link :to="{ name: 'dashboard' }" class="text-red-700">
					<UserCircle></UserCircle>
				</router-link>
			</div>
		</div>
	</div>
	<div class="h-16"></div>
</template>

<script>
import UserCircle from "../SVG/UserCircle.vue";

export default {
	name: "Nav",
	components: { UserCircle },
	props: {},
	computed: {},
	methods: {},
	data() {
		return {};
	},
	watch() {},
	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {},
	beforeUpdate() {},
	updated() {},
	beforeUnmount() {},
	unmounted() {},
};
</script>

<style lang="css" scoped></style>
