import styles from './Tips.module.css'
import menu from '/src/assets/menufood.png'
import { NavLink } from 'react-router-dom'

export const Tips = () => {
  return (
    <div className={styles.tips}>
        <span>Spice up your life! Spicy food boosts your metabolism, relieves pain, and can even help you live longer. Give it a try!</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cumque consequuntur tempora debitis, aliquid quae soluta suscipit et sapiente, corrupti molestiae ratione voluptatum corporis vero harum possimus. Incidunt, voluptatum reiciendis.</span>
        <div className={styles.go_menu}>
          <NavLink to="/menu">
            <button><img src={menu} alt="" /> Explore our spicy options</button>
          </NavLink>
        </div>
   </div>
  )
}

export default Tips