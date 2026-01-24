"use client";

import { useEffect, useRef } from "react";
import styles from "./index.module.css";

type Props = {
  portalId: string | undefined;
  formId: string | undefined;
};

export default function HubSpotForm({ portalId, formId }: Props) {
  if (portalId === undefined || formId === undefined) {
    throw new Error("HubSpotのPortal IDまたはForm IDが設定されていません。");
  }
  const containerRef = useRef<HTMLDivElement>(null);
  const formCreatedRef = useRef(false);

  useEffect(() => {
    // 既にフォームが作成されている場合はスキップ
    if (formCreatedRef.current) return;

    const createForm = () => {
      // コンテナをクリア（重複防止）
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      // @ts-ignore
      if (window.hbspt) {
        formCreatedRef.current = true;
        // @ts-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: portalId,
          formId: formId,
          target: `#hubspotForm`,
        });
      }
    };

    // スクリプトが既に読み込まれているかチェック
    const existingScript = document.querySelector(
      'script[src="//js.hsforms.net/forms/embed/v2.js"]',
    );

    if (existingScript) {
      // スクリプトが既にある場合は直接フォームを作成
      createForm();
    } else {
      // スクリプトを新規作成
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.onload = createForm;
      document.body.appendChild(script);
    }

    return () => {
      // クリーンアップ時にコンテナをクリア
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      formCreatedRef.current = false;
    };
  }, [portalId, formId]);

  return (
    <div className={styles.container}>
      <div
        id="hubspotForm"
        ref={containerRef}
        className={styles.formContainer}
      />
    </div>
  );
}
