<script lang="ts">
    export let arrow = false
</script>
<button
    class="bg-white py-2 px-4 font-sanchez text-base border-2 border-black drop-shadow-capsule"
    on:click
>
    <slot /> 
    {#if arrow}
        →
    {/if}
</button>