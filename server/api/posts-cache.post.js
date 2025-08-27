export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const storage = useStorage('redis')
  
  await storage.setItem('posts', body.posts)
  await storage.setItem('posts_timestamp', Date.now())
  
  return { success: true }
})