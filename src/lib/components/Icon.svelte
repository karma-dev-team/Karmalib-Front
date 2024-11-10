<script lang="ts">
    let { name, alt, width = 24, height = 24, className = ""}: { 
        name: string, 
        alt: string, 
        width?: number, 
        height?: number,
        className?: string 
    } = $props(); 
</script>

<div class="icon">
    <img class={className} src={`/${name}.svg`} alt={alt}  width={width} height={height}/> 
</div>

<style>
    .icon {
        display: inline-block;
    }
</style>
  