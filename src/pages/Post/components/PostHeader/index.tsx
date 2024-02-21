import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { IPost } from '../../../Blog'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <NavLink to="/">
              <div>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Voltar</span>
              </div>
            </NavLink>
            <ExternalLink
              text="Ver no GitHub"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
