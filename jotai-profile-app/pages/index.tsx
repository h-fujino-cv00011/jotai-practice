import { useAtom } from 'jotai';

 // ❓ 問2-1: Profile型を import
import { profileAtom, ___ } from '../atoms/profile';
import Link from 'next/link';

export default function Home() {
   // ❓ 問2-2: jotai から状態と更新関数を取得しよう
  const [profile, setProfile] = ____;

  const handleChange = (field: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // ❓ 問2-3: 対象フィールドを動的に更新
    setProfile(prev => ({ ...prev, [___]: e.target.value }));
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '8px',
    margin: '8px 0',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };
  
  return (
    <div style={{ padding: 20, maxWidth: '600px' }}>
      <h1>プロフィール作成</h1>
      <div>
        <input 
          style={inputStyle}
          placeholder="名前" 
          value={profile.name} 
          onChange={handleChange('name')} 
        />
        <input 
          style={inputStyle}
          placeholder="ニックネーム" 
          value={profile.nickname} 
          onChange={handleChange('nickname')} 
        />
        <input 
          style={inputStyle}
          placeholder="好きなこと" 
          value={profile.hobby} 
          onChange={handleChange('hobby')} 
        />
        <textarea 
          style={{...inputStyle, height: '80px', resize: 'vertical'}}
          placeholder="一言コメント" 
          value={profile.comment} 
          onChange={handleChange('comment')} 
        />
        <br />
        <Link href="/profile">
          <button style={{ padding: '12px 24px', fontSize: '16px' }}>
            プロフィールを確認する →
          </button>
        </Link>
      </div>
    </div>
  );
}
