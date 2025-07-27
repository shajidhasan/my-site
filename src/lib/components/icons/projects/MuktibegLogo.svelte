<script lang="ts">
	let thrusting = false;
	let body = 'fill-white';
	let accent = 'fill-orange-500';
	let windowFill = 'fill-cyan-500';
	let windowStroke = 'stroke-cyan-800';
</script>

<div class="relative mb-4 size-16 rounded-lg bg-gradient-to-t from-sky-200 via-sky-300 to-sky-400">
	<svg
		class="absolute top-1/2 left-1/2 origin-center -translate-x-[68%] -translate-y-[45%] scale-80 rotate-45"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 34 100"
	>
		<g
			class="origin-center transform transition-transform duration-1000"
			class:scale-150={thrusting}
		>
			<g class="animate-shake">
				<path
					d="M17 52.2c-9.9 8.7-6.1 25-6.1 25l2.3-2.3s0 3 3.7 7.2c3.8-3.8 3.8-7.2 3.8-7.2l2.3 2.3s3.8-16.3-6-25"
					fill="#fa9523"
				/>
				<path
					d="M17 54.1c-6.9 8-5 19-5 19l2-2s0 5 3 9.1c3-3.8 3-9 3-9l2.2 1.8s2-11-5.3-18.9"
					fill="#fccc31"
				/>
				<path
					d="M17 55.2c-5 7.6-3.8 15.2-3.8 15.2L15 67s-1.2 3 1.8 9c3-6 2.3-9 2.3-9l1.9 3s1.1-6.8-3.8-15.1"
					fill="#fced6c"
				/>
			</g>
		</g>
		<path d="M17 35C-8 45 2 65 2 65l15-15 15 15s10-20-15-30" class={accent} />
		<path d="M17 0c-25 25-5 61-5 61h10s20-36-5-61" class={body} />
		<path
			d="M17 0q-5 5.1-7.8 10.7A17 12 0 0 0 17 12a17 12 0 0 0 7.9-1.3A43 43 0 0 0 17 0"
			class={accent}
			paint-order="markers stroke fill"
		/>
		<path d="M17 40c-9 5 0 25 0 25s9-20 0-25" class={accent} />
		<circle
			cx="17"
			cy="23"
			r="6"
			class="{windowFill} {windowStroke}"
			stroke-width="2"
			stroke-linecap="round"
			paint-order="markers fill stroke"
		/>
		<path d="m17 65 1.6-4H22l2-4 8 8s6.3-12.5-3.5-22.7C30.9 29.8 30.4 13.3 17 0" opacity=".1" />
	</svg>
</div>

<style>
	.animate-shake {
		animation: shake 1s infinite;
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateY(0);
		}
		10%,
		30%,
		50%,
		70%,
		90% {
			transform: translateY(-1px);
		}
		20%,
		40%,
		60%,
		80% {
			transform: translateY(1px);
		}
	}
</style>
