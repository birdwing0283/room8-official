import React from 'react';

// メンバーのデータ定義（鳥丸さんの説明文が途切れないように修正）
const members = [
  {
    id: "01",
    role: "CEO",
    name: "Tsubasa Torimaru",
    description: "新規事業開発、インフルエンサーマーケティング、マッチングプラットフォームなど、多岐にわたる事業の立ち上げと成長を牽引。Room8のすべての事業の総責任者として、クライアントの挑戦を成功へと導きます。"
  },
  {
    id: "02",
    role: "COO",
    name: "Member 2",
    description: "ここに2人目のメンバーの詳しい説明文が入ります。事業全体のオペレーションや実務の統括を担当しています。"
  },
  {
    id: "03",
    role: "CMO",
    name: "Member 3",
    description: "ここに3人目のメンバーの詳しい説明文が入ります。マーケティング戦略の立案やプロモーション全般を担当しています。"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      
      {/* 1. ヘッダーセクション（スマホ時に横スライドできるように修正） */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="text-xl font-bold tracking-wider shrink-0">Room8</div>
          
          {/* ナビゲーション：スマホ時は横スクロール、PC(md以上)では通常配置 */}
          <nav className="flex items-center gap-6 overflow-x-auto scrollbar-none py-2 -my-2 max-w-[70%] md:max-w-none mask-image">
            <a href="#service" className="text-sm text-neutral-400 hover:text-white transition shrink-0">SERVICE</a>
            <a href="#member" className="text-sm text-neutral-400 hover:text-white transition shrink-0">MEMBER</a>
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition shrink-0">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* メインヒーロー視覚効果 */}
      <main className="pt-16">
        <section className="relative min-h-[90vh] flex flex-col justify-center px-4 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/50"></span>
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">事業を創り、機会を創る</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              CREATE BUSINESSES,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-800">
                CREATE OPPORTUNITIES.
              </span>
            </h1>
            <p className="text-sm sm:text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
              Room8は、新規事業開発ノウハウによる事業開発支援と自社プロダクト開発の両面から新しい事業開発を推進します。
            </p>
          </div>
          <div className="absolute right-0 bottom-10 text-[20vw] font-black text-white/[0.02] select-none leading-none pointer-events-none">
            8
          </div>
        </section>

        {/* 2. 3. 4. サービスセクション（文字化け修正＆行間の幅を狭く調整） */}
        <section id="service" className="py-20 md:py-32 border-t border-white/5 bg-neutral-950/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 md:mb-24">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">OUR CORE VALUE</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">SERVICE</h2>
            </div>

            {/* 各サービス間の余白を space-y-16（少し狭め）に調整 */}
            <div className="space-y-16 md:space-y-24 max-w-5xl">
              
              {/* サービス 01 */}
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start group">
                {/* 01の色を暗い色から「白（text-white）」に変更 */}
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight block pt-1">01</span>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">新規事業開発支援事業</h3>
                  {/* 文字化けを日本語「様々な事業の立ち上げを」に修正 */}
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                    豊富な経験と独自のフレームワークを用いて、アイディエーションからMVP開発、プロダクトマーケットフィット（PMF）まで、様々な事業の立ち上げを一気通貫で強力にサポートします。
                  </p>
                </div>
              </div>

              {/* サービス 02 */}
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start group">
                {/* 02の色を暗い色から「白（text-white）」に変更 */}
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight block pt-1">02</span>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">インフルエンサーマーケティング事業</h3>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                    ターゲット層に深く刺さるインフルエンサーの選定から、文脈を重視した企画立案、データ分析に基づく効果測定まで、認知拡大とコンバージョンを最大化するマーケティング施策を提供します。
                  </p>
                </div>
              </div>

              {/* サービス 03 */}
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start group">
                {/* 03の色を暗い色から「白（text-white）」に変更 */}
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight block pt-1">03</span>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">マッチングプラットフォーム事業</h3>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                    独自のアルゴリズムと直感的なUI/UXを掛け合わせ、需要と供給を最適かつスピーディーに結びつける次世代のマッチングシステム。新たなコミュニティと価値ある出会いを創出します。
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. メンバーセクション（説明文を全部表示するように修正） */}
        <section id="member" className="py-20 md:py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 md:mb-24">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">BOARD MEMBERS</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">MEMBER</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {members.map((member) => (
                <div key={member.id} className="bg-neutral-900/40 border border-white/5 p-8 rounded-2xl space-y-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{member.role}</span>
                      <span className="text-sm font-mono text-white/30">{member.id}</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                    {/* line-clampなどを外して、文章が最後まで全て表示されるように修正 */}
                    <p className="text-neutral-400 text-sm leading-relaxed font-light whitespace-pre-wrap">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アバウト（会社概要）セクション */}
        <section id="about" className="py-20 md:py-32 border-t border-white/5 bg-neutral-950/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
              <div>
                <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">COMPANY PROFILE</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">ABOUT</h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light max-w-md">
                  私たちは、可能性の境界線を押し広げるビジネスパートナーです。情熱とテクノロジーを融合させ、未来のスタンダードとなる事業を創り出します。
                </p>
              </div>
              <div className="border border-white/5 rounded-2xl overflow-hidden bg-neutral-900/20 divide-y divide-white/5">
                <div className="grid grid-cols-[100px_1fr] p-5 text-sm"><span className="text-neutral-500 font-medium">会社名</span><span className="font-light">Room8 Inc.</span></div>
                <div className="grid grid-cols-[100px_1fr] p-5 text-sm"><span className="text-neutral-500 font-medium">設立</span><span className="font-light">2026年</span></div>
                <div className="grid grid-cols-[100px_1fr] p-5 text-sm"><span className="text-neutral-500 font-medium">代表者</span><span className="font-light">鳥丸 翼</span></div>
                <div className="grid grid-cols-[100px_1fr] p-5 text-sm"><span className="text-neutral-500 font-medium">事業内容</span><span className="font-light">新規事業開発支援、マーケティング、プラットフォーム運営</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-white/5 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <div>&copy; {new Date().getFullYear()} Room8 Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition">PRIVACY POLICY</a>
            <a href="#" className="hover:text-neutral-400 transition">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
