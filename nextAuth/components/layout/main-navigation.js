import Link from "next/link";
import { useSession } from "next-auth/react";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  const { data, status } = useSession();
  console.log(data);
  console.log(status);

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!data && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {data && (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
