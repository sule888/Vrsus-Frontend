import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importar iconos sólidos
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Importar iconos regulares
import { } from '@fortawesome/free-regular-svg-icons'

// Importar iconos de marcas
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons'

// Añadir iconos a la librería
library.add(faChevronDown, faFacebook, faTwitter, faInstagram,faTiktok, faYoutube)

export { FontAwesomeIcon }
