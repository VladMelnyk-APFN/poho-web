import { useRouter } from "next/router";
import RedirectFallback from "../../components/RedirectFallback";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <RedirectFallback 
      deepLinkUrl={username ? `poho://user/${username}` : null}
      entityName={`@${username}'s profile`}
      title={`@${username} on Poho`}
      description={`Check out ${username}'s profile on Poho`}
      ogType="profile"
    />
  );
}

