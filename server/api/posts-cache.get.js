export default defineEventHandler(async (event) => {
  const storage = useStorage('redis')
  const cachedPosts = await storage.getItem('posts')
})