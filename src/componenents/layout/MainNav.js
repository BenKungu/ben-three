import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={styles.mainh}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
