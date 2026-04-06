import { useRouter } from "next/router";
import RedirectFallback from "../../components/RedirectFallback";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <RedirectFallback 
      deepLinkUrl={id ? `poho://post/${id}` : null}
      entityName="in Poho"
      title="Poho Post"
      description="Check out this post on Poho"
      ogType="article"
    />
  );
}

