import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/gabifrancamr.png" />

      <ProfileDetails>
        <header>
          <h1>Gabriela França</h1>
          <ExternalLink text="github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            GabiFrancamr
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Front-End
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
