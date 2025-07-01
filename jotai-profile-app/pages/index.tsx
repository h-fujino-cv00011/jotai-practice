import { useAtom } from 'jotai';

 // ❓ 問2-1: Profile型を import
import { profileAtom, ___ } from '../atoms/profileAtom';
import Link from 'next/link';

export default function Home() {
   // ❓ 問2-2: jotai から状態と更新関数を取得しよう
  const [profile, setProfile] = ____;

  const handleChange = (field: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // ❓ 問2-3: 対象フィールドを動的に更新
    setProfile({ ...profile, [___]: e.target.value });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>プロフィール作成</h1>
      <input placeholder="名前" value={profile.name} onChange={handleChange('name')} />
      <br />
      <input placeholder="ニックネーム" value={profile.nickname} onChange={handleChange('nickname')} />
      <br />
      <input placeholder="好きなこと" value={profile.hobby} onChange={handleChange('hobby')} />
      <br />
      <textarea placeholder="一言コメント" value={profile.comment} onChange={handleChange('comment')} />
      <br /><br />
      <Link href="/profile">プロフィールを確認する →</Link>
    </div>
  );
}
