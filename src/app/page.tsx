'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-sans selection:bg-blue-500/30 relative">
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-[110] mix-blend-difference px-8 py-10 flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter leading-none">Room8</span>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 mt-2">Inc.</span>
        </div>
        <div className="flex gap-10 text-[10px] tracking-[0.4em] uppercase font-medium">
          <a href="#services" className="hover:opacity-50 transition-opacity">Service</a>
          <a href="#members" className="hover:opacity-50 transition-opacity">Member</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex flex-col justify-center px-8 overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40rem] font-bold text-blue-500/[0.015] leading-none pointer-events-none select-none">8</div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-6 mb-12 opacity-60">
            <div className="w-12 h-[1px] bg-white" />
            <span className="text-sm tracking-[0.2em] font-medium">事業を創り、機会を創る</span>
          </div>
          <h1 className="text-[9vw] md:text-[7vw] font-bold leading-[1.0] tracking-tighter uppercase mb-16">
            Create businesses, <br />
            <span className="text-transparent italic font-serif" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>create opportunities.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
            Room8は、新規事業開発ノウハウによる事業開発支援と自社プロダクト開発の両面から新しい事業開発を推進します。
          </p>
        </div>
      </section>

      {/* Service Section */}
      <section id="services" className="py-60 px-8 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto space-y-60">
          {/* 01: 新規事業開発支援 */}
          <div className="group flex flex-col md:flex-row gap-16 items-center border-t border-white/10 pt-16">
            <div className="flex-1 max-w-2xl">
              <div className="text-6xl font-serif italic text-white/[0.03] select-none mb-8">01</div>
              <h3 className="text-4xl font-bold tracking-tight mb-8">新規事業開発支援</h3>
              <p className="text-gray-400 leading-relaxed font-light mb-12 text-lg">
                様々な事業의シード〜アーリーフェーズの事業開発をプロダクト開発、セールス体制の構築、カスタマーサクセス組織の立ち上げなど様々な領域から多角的に支援し、パートナー企業様の事業拡大を最大化します。
              </p>
              <div className="bg-white/[0.02] p-8 md:p-12 mb-8 group-hover:bg-white/[0.04] transition-colors">
                <span className="text-[10px] tracking-[0.4em] uppercase text-blue-500 block mb-4">Case Study</span>
                <h4 className="text-2xl mb-4 font-bold text-white uppercase tracking-tighter leading-none">AIチャットbotの新規プロダクト開発支援</h4>
                <p className="text-base text-gray-500 font-light leading-relaxed mb-8">
                  AIを活用して回答率90%以上のプロダクトを実現。FAQページを取り込むだけで内容を解析し、カスタマーサポートの工数を劇的に削減しました。
                </p>
                <a href="https://smart-search.tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-bold text-white hover:text-blue-500 transition-colors">
                  サービスはこちら <span className="text-lg">→</span>
                </a>
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-[#1a1a1a] shadow-2xl rounded-sm border border-white/5">
              <img src="/chatobot.png" alt="AI Chatbot Service" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* 02: インフルエンサーマーケティング */}
          <div className="group flex flex-col md:flex-row-reverse gap-16 items-center border-t border-white/10 pt-16">
            <div className="flex-1 max-w-2xl">
              <div className="text-6xl font-serif italic text-white/[0.03] select-none mb-8">02</div>
              <h3 className="text-4xl font-bold tracking-tight mb-8">インフルエンサーマーケティング事業</h3>
              <p className="text-gray-400 leading-relaxed font-light mb-12 text-lg">
                1,000名以上のインフルエンサーと提携し、全国各地の魅力ある食品をPRするマーケティング事業を運営。単なる広告に留まらない、ファンとの深いエンゲージメントを創出します。
              </p>
              <div className="bg-white/[0.02] p-8 md:p-12 mb-8 group-hover:bg-white/[0.04] transition-colors">
                <span className="text-[10px] tracking-[0.4em] uppercase text-blue-500 block mb-4">Product</span>
                <h4 className="text-2xl mb-4 font-bold text-white uppercase tracking-tighter leading-none">体験型マーケット「osimo」</h4>
                <p className="text-base text-gray-500 font-light leading-relaxed mb-8">
                  推しの紹介する商品を一緒に体験して楽しめるマーケット。商品購入だけでなく、推しと一緒に食事できるイベントに参加できるなど、新しい体験価値を提供しています。
                </p>
                <a href="https://room8shop.base.shop/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-bold text-white hover:text-blue-500 transition-colors">
                  サービスはこちら <span className="text-lg">→</span>
                </a>
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-[#1a1a1a] shadow-2xl">
              <img src="/gazou2.jpeg" alt="Service 2" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* 03: マッチングプラットフォーム */}
          <div className="group flex flex-col md:flex-row gap-16 items-center border-t border-white/10 pt-16">
            <div className="flex-1 max-w-2xl">
              <div className="text-6xl font-serif italic text-white/[0.03] select-none mb-8">03</div>
              <h3 className="text-4xl font-bold tracking-tight mb-8">マッチングプラットフォーム事業</h3>
              <p className="text-gray-400 leading-relaxed font-light mb-12 text-lg">
                約1,200名のゲーマーやクリエイターが登録するファンとクリエイターのオンラインイベントプラットフォーム「Fandom」を運営。コミュニティの熱量を最大化するマッチングを実現します。
              </p>
              <div className="bg-white/[0.02] p-8 md:p-12 mb-8 group-hover:bg-white/[0.04] transition-colors">
                <span className="text-[10px] tracking-[0.4em] uppercase text-blue-500 block mb-4">Own Product</span>
                <h4 className="text-2xl mb-4 font-bold text-white uppercase tracking-tighter leading-none">コミュニティプラットフォーム「Fandom」</h4>
                <p className="text-base text-gray-500 font-light leading-relaxed">
                  サービスリリースから累計10万回以上のイベントが開催され、オンラインのランチ会、ゲームなど様々な企画が毎日実施。クリエイターがファンと直接繋がる場を提供しています。
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-8 flex items-center justify-center max-w-xl mx-auto w-full">
              <img src="/fandom.png" alt="Fandom Logo" className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Member Section */}
      <section id="members" className="py-60 px-8 bg-[#0f0f0f] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-right">
            <span className="text-[10px] tracking-[0.6em] uppercase opacity-30 block mb-6">Core Members</span>
            {/* ⭕️ MEMBERS から Board Members に変更しました */}
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">Board Members.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { name: "鳥丸 翼", role: "CEO", en: "Tsubasa Torimaru", desc: "佐賀大学在学中に動画配信事業を売却後、リクルートに入社。新規事業開発室にてプロダクトマネージャーとして多数の事業立ち上げを牽引。2022年1月より現職。" },
              { name: "呉 可天", role: "CTO", en: "Go Katen", desc: "京都大学大学院にてコンピュータサイエンス修士号を取得。リクルートにデータサイエンティストとして入社し、indeed等のビッグデータを活用した事業開発に従事。2022年1月現職。" },
              { name: "登坂 直弥", role: "COO", en: "Naoya Tosaka", desc: "早稲田大学法学部卒業後、リクルートに入社。メディアや検索エンジンのSales、領域・商品企画などの要職を経験。2022年1月より現職。" }
            ].map((m) => (
              <div key={m.name} className="border-l border-white/5 pl-8 py-4">
                <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-2 block">{m.role}</span>
                <h3 className="text-3xl font-bold mb-1">{m.name}</h3>
                <p className="text-[10px] text-gray-600 tracking-widest mb-6 uppercase">{m.en}</p>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-60 px-8 bg-[#ffffff] text-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="text-[10px] tracking-[0.6em] uppercase opacity-30 block mb-6">Overview</span>
              <h2 className="text-6xl font-bold tracking-tighter uppercase mb-16 text-black">Company.</h2>
              <dl className="space-y-8">
                {[
                  { label: "会社名", value: "Room8株式会社 (Room8 Inc.)" },
                  { label: "所在地", value: "東京都千代代区神田多町2-1-23 神田東山ビル" },
                  { label: "資本金", value: "45,000,000円" },
                  { label: "代表取締役", value: "鳥丸 翼" },
                  { label: "従業員数", value: "17名(業務委託含む)" }
                ].map((item) => (
                  <div key={item.label} className="border-b border-black/10 pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                    <dt className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{item.label}</dt>
                    <dd className="text-lg font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col justify-end">
               <span className="text-[10px] tracking-[0.6em] uppercase opacity-30 block mb-8 text-black">Shareholders</span>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-3xl font-serif italic text-gray-400">
                 {[
                   { name: "EastVentures", url: "https://east.vc/" },
                   { name: "ANOBAKA", url: "https://anobaka.jp/" },
                   { name: "DRGFund", url: "https://drgfund.com/" },
                   { name: "SkylandVentures", url: "https://www.skyland.vc/" }
                 ].map(s => (
                   <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">{s.name}</a>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 flex justify-between items-center border-t border-white/5 relative z-10">
        <span className="text-xs opacity-30 tracking-[0.5em] uppercase">© Room8 Inc.</span>
      </footer>
    </div>
  );
}