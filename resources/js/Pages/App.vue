<template>
	<Nav></Nav>
	<router-view></router-view>
</template>

<script>
import Nav from "../Layouts/Nav.vue";

export default {
	components: { Nav },
};
</script>
<style lang="scss" scoped></style>
