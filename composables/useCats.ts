export const useCats = () => {
  // Compose three unique cataas URLs (cataas returns image content)
  const urls = Array.from({ length: 3 }, (_, i) => `https://cataas.com/cat?random=${Date.now()}-${i}`)
  return { urls }
}