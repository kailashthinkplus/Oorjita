import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
/* CORE */
import "./styles/theme-style.css";
import "./styles/frontend.css";
import "./styles/custom-frontend.css";
import "./styles/header-footer.css";

/* ELEMENTOR */
import "./styles/elementor.css";
import "./styles/elementor-icons.css";

/* WIDGETS */
import "./styles/widgets/widget-heading.css";
import "./styles/widgets/widget-icon-list.css";
import "./styles/widgets/widget-image.css";
import "./styles/widgets/widget-counter.css";
import "./styles/widgets/widget-spacer.css";
import "./styles/widgets/custom-icon-box.css";

/* ICONS */
import "./styles/icons/fontawesome.css";
import "./styles/icons/fa-solid.css";
import "./styles/icons/fa-brands.css";

/* SWIPER */
import "./styles/swiper.css";
import "./styles/e-swiper.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
