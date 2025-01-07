import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function usePolling(ms: number = 60000, searchParam: string | null) {
  const router = useRouter();

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("interval running");

      if (!searchParam) {
        console.log("refreshing data");
        router.refresh();
      }
    }, ms);

    return () => clearInterval(intervalID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam, ms]);
}
