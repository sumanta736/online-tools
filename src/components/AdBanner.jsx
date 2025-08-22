import { useEffect, UseRef } from "react";

export default function AdBanner({adSlotId}) {
  const ref = UseRef();

  useEffect(() =>{
    try {
      if (window.adsbygoogle && ref.current){
        window.adsbygoogle.push({});
      }
    } catch (e){
      // AdSense may not be ready in dev or before approval
      console.debug("AdSense error:", e?.message || e);
    }
  },[]);

  return (
    <ins
      ref={ref}
      className={{ display: "block" }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXX {/* TODO: replace with your publisher ID */}
      data-ad-slot={adSlotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
      >
    </ins>
  );
}
