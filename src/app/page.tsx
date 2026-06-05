import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      
      {/* 1. ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="text-xl font-bold tracking-wider shrink-0">Room8</div>
          
          <nav className="flex items-center gap-6 overflow-x-auto scrollbar-none py-2 -my-2 max-w-[65%] md:max-w-none">
            <a href="#service" className="text-sm text-neutral-400 hover:text-white transition shrink-0">SERVICE</a>
            <a href="#member" className="text-sm text-neutral-400 hover:text-white transition shrink-0">MEMBER</a>
            <a href="#stakeholders" className="text-sm text-neutral-400 hover:text-white transition shrink-0">STAKEHOLDERS</a>
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition shrink-0">ABOUT</a>
          </nav>
        </div>
      </header>

      {/* メインヒーロー */}
      <main className="pt-16">
        <section className="relative min-h-[85vh] flex flex-col justify-center px-4 max-w-7xl mx-auto overflow-hidden">
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

        {/* サービスセクション */}
        <section id="service" className="py-16 md:py-24 border-t border-white/5 bg-neutral-950/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 md:mb-16">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">OUR CORE VALUE</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">SERVICE</h2>
            </div>

            <div className="space-y-12 md:space-y-16">
              
              {/* 01: 新規事業開発支援 */}
              <div className="relative border-b border-white/5 pb-12 md:pb-16">
                <div className="text-[6rem] md:text-[8rem] font-black text-white/80 opacity-40 font-mono leading-none absolute -top-8 -left-2 select-none z-0">01</div>
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center pt-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">新規事業開発支援</h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                      様々な事業のシード〜アーリーフェーズの事業開発をプロダクト開発、セールス体制の構築、カスタマーサクセス組織の立ち上げなど様々な領域から多角的に支援し、パートナー企業様の事業拡大を最大化します。
                    </p>
                    <div className="bg-neutral-900/60 border border-white/5 p-6 rounded-xl space-y-2">
                      <span className="text-xs font-mono tracking-widest text-blue-400 uppercase block">CASE STUDY</span>
                      <h4 className="text-lg font-bold">AIチャットBOTの新規プロダクト開発支援</h4>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">AIを活用して回答率 90%以上のプロダクトを実現。FAQページを取り込むだけで内容を解析し、カスタマーサポートの工数を劇的に削減しました。</p>
                    </div>
                    <div>
                      <a href="https://smart-search.tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition group font-medium">
                        サービスはこちら <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900/40 w-full aspect-[16/9] relative block">
                    <img 
                      src="/chatobot.png" 
                      alt="AIチャットボット" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 02: インフルエンサーマーケティング事業 */}
              <div className="relative border-b border-white/5 pb-12 md:pb-16">
                <div className="text-[6rem] md:text-[8rem] font-black text-white/80 opacity-40 font-mono leading-none absolute -top-8 -left-2 select-none z-0">02</div>
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center pt-8">
                  <div className="space-y-6 md:col-start-2 md:row-start-1">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">インフルエンサーマーケティング事業</h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                      1,000名以上のインフルエンサーと提携し、全国各地の魅力ある食品をPRするマーケティング事業を運営。単なる広告に留まらない、ファンとの深いエンゲージメントを創出します。
                    </p>
                    <div className="bg-neutral-900/60 border border-white/5 p-6 rounded-xl space-y-2">
                      <span className="text-xs font-mono tracking-widest text-purple-400 uppercase block">PRODUCT</span>
                      <h4 className="text-lg font-bold">体験型マーケット「OSIMO」</h4>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">推しの紹介する商品を一緒に体験して楽しめるマーケット。商品購入だけでなく、推しと一緒に食事できるイベントに参加できるなど、新しい体験価値を提供しています。</p>
                    </div>
                    <div>
                      <a href="https://room8shop.base.shop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition group font-medium">
                        サービスはこちら <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900/40 w-full aspect-[16/9] relative block md:col-start-1 md:row-start-1">
                    <img 
                      src="/gazou2.jpeg" 
                      alt="OSIMO" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 03: マッチングプラットフォーム事業 */}
              <div className="relative pb-4">
                <div className="text-[6rem] md:text-[8rem] font-black text-white/80 opacity-40 font-mono leading-none absolute -top-8 -left-2 select-none z-0">03</div>
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center pt-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">マッチングプラットフォーム事業</h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                      約1,200名のゲーマーやクリエイターが登録するファンとクリエイターのオンラインイベントプラットフォーム「Fandom」を運営。コミュニティの熱量を最大化するマッチングを実現します。
                    </p>
                    <div className="bg-neutral-900/60 border border-white/5 p-6 rounded-xl space-y-2">
                      <span className="text-xs font-mono tracking-widest text-green-400 uppercase block">OWN PRODUCT</span>
                      <h4 className="text-lg font-bold">コミュニティプラットフォーム「FANDOM」</h4>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">サービスリリースから累計10万回以上のイベントが開催され、オンラインのランチ会、ゲームなど様々な企画が毎日実施。クリエイターがファンと直接繋がる場を提供しています。</p>
                    </div>
                  </div>
                  
                  <div className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900/40 w-full aspect-[16/9] relative block">
                    <img 
                      src="/fandom.png" 
                      alt="Fandom" 
                      className="absolute inset-0 w-full h-full object-contain p-12 bg-neutral-950"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* メンバーセクション */}
        <section id="member" className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 md:mb-16">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">CORE MEMBERS</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">BOARD MEMBERS.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">CEO</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">鳥丸 翼 <span className="text-xs font-normal text-neutral-500 block mt-1">TSUBASA TORIMARU</span></h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light whitespace-pre-wrap">
                    佐賀大学在学中に動画配信事業を売却後、リクルートに入社。新規事業開発室にてプロダクトマネージャーとしてインテリア業界のSaaS事業立ち上げを担当。またTBSテレビと協業で縦型動画メディアサービスの立ち上げもプロダクトマネージャーとして担当。2022年1月より現職。
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">CTO</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">呉 可天 <span className="text-xs font-normal text-neutral-500 block mt-1">GO KATEN</span></h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light whitespace-pre-wrap">
                    京都大学大学院にてコンピュータサイエンス修士号を取得。リクルートにデータサイエンティストとして入社し、indeed等のビッグデータを活用した事業開発に従事。2022年1月現職。
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">COO</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">登坂 直弥 <span className="text-xs font-normal text-neutral-500 block mt-1">NAOYA TOSAKA</span></h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light whitespace-pre-wrap">
                    早稲田大学法学部卒業後、リクルートに入社。メディアや検索エンジンのSales、領域・商品企画などの要職を経験。2022年1月より現職。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 【新規追加】ステークホルダーセクション */}
        <section id="stakeholders" className="py-16 md:py-24 border-t border-white/5 bg-neutral-950/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 md:mb-16">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">OUR PARTNERS</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">STAKEHOLDERS</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <a 
                href="https://east.vc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-8 bg-neutral-900/40 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-900/80 transition-all group min-h-[100px]"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight text-neutral-400 group-hover:text-white transition-colors">
                  East Ventures
                </span>
              </a>

              <div 
                className="flex items-center justify-center p-8 bg-neutral-900/40 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-900/80 transition-all group min-h-[100px]"
              >
                <span className="text-lg md:text-xl font-black tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase">
                  ANOBAKA
                </span>
              </div>

              <a 
                href="https://drgfund.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-8 bg-neutral-900/40 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-900/80 transition-all group min-h-[100px]"
              >
                <span className="text-lg md:text-xl font-mono tracking-tight font-bold text-neutral-400 group-hover:text-white transition-colors">
                  DRG Fund
                </span>
              </a>

              <a 
                href="https://www.skyland.vc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-8 bg-neutral-900/40 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-900/80 transition-all group min-h-[100px]"
              >
                <span className="text-sm md:text-base font-sans font-bold tracking-tighter text-neutral-400 group-hover:text-white transition-colors">
                  Skyland Ventures
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUTセクション */}
        <section id="about" className="py-16 md:py-24 border-t border-white/5 bg-neutral-950/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">COMPANY PROFILE</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">ABOUT</h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light max-w-md">
                  私たちは、可能性の境界線を押し広げるビジネスパートナーです。情熱とテクノロジーを融合させ、未来のスタンダードとなる事業を創り出します。
                </p>
              </div>
              
              <div className="border border-white/5 rounded-2xl overflow-hidden bg-neutral-900/20 divide-y divide-white/5">
                <div className="grid grid-cols-[140px_1fr] p-5 text-sm">
                  <span className="text-neutral-500 font-medium">会社名</span>
                  <span className="font-light">Room8 Inc.</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] p-5 text-sm">
                  <span className="text-neutral-500 font-medium">設立</span>
                  <span className="font-light">2022年</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] p-5 text-sm">
                  <span className="text-neutral-500 font-medium">代表者</span>
                  <span className="font-light">代表取締役 鳥丸 翼</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] p-5 text-sm">
                  <span className="text-neutral-500 font-medium">資本金</span>
                  <span className="font-light">45,000,000円</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] p-5 text-sm">
                  <span className="text-neutral-500 font-medium">従業員数</span>
                  <span className="font-light">17名 (業務委託含む)</span>
                </div>
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
