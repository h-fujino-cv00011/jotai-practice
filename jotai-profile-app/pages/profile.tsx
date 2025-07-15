import { useAtom } from 'jotai';
// ❓ 問3-1: profileAtom を import
import { ____ } from '../atoms/profile';
import Link from 'next/link';

export default function ProfilePage() {
  // ❓ 問3-2: jotai の状態を読み取ろう
  const [profile] = ___(___);

  if (!profile.name) {
    return (
      <div style={{ padding: 20 }}>
        <p>プロフィールが設定されていません。</p>
        <Link href="/">← プロフィールを作成する</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>プロフィール</h1>
      {/* ❓ 問3-3: プロフィール情報を表示 */}
      <p>🌟 <strong>{___}</strong> さんのプロフィールをご紹介します。</p>
      <ul>
        <li>🧑‍🎤 ニックネーム：{___}</li>
        <li>🎯 趣味：{___}</li>
        <li>💬 コメント：{___}</li>
      </ul>
      <br />
      <Link href="/">← プロフィールを編集する</Link>
    </div>
  );
}
