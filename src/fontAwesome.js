import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importar iconos sólidos
import { faChevronDown, faChevronUp, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

// Importar iconos regulares
import { faSmile, faFrown } from '@fortawesome/free-regular-svg-icons'

// Importar iconos de marcas
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Añadir iconos a la librería
library.add(faChevronDown, faChevronUp, faUser, faEnvelope, faPhone, faSmile, faFrown, faFacebook, faTwitter, faInstagram)

export { FontAwesomeIcon }
