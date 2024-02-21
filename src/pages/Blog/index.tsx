import { useCallback, useEffect, useState } from 'react'
import { Post } from './components/Post'
import { SearchInput } from './components/SearchInput'
import { Profile } from './components/profile'
import { PostsListContainer } from './styles'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20label:published%20repo:gabifrancamr/blog-posts`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} postsLength={posts.length} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  )
}
