/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Dumbbell, 
  Droplets, 
  User, 
  Flame, 
  Clock, 
  Zap, 
  ChevronRight, 
  Plus, 
  CheckCircle2,
  Bell,
  Settings,
  Trophy,
  BarChart3,
  LogOut
} from 'lucide-react';
import { WORKOUT_PROGRAMS } from './constants';
import { UserStats, WorkoutProgram } from './types';

// --- Components ---

const NavItem = ({ active, icon: Icon, label, onClick }: { active: boolean, icon: any, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${active ? 'text-neon' : 'text-text-secondary'}`}
  >
    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

const StatCard = ({ icon: Icon, value, label, color = "text-neon" }: { icon: any, value: string | number, label: string, color?: string }) => (
  <div className="flex-1 bg-card border border-zinc-800/50 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
    <Icon size={20} className="text-text-secondary mb-2" />
    <span className={`font-display text-lg font-extrabold ${color}`}>{value}</span>
    <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">{label}</span>
  </div>
);

// --- Screens ---

const HomeScreen = ({ stats, onNavigate }: { stats: UserStats, onNavigate: (s: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pb-24"
  >
    {/* Header */}
    <div className="px-6 pt-12 mb-6">
      <p className="text-text-secondary text-sm font-medium mb-1">Hoş geldin,</p>
      <h1 className="font-display text-2xl font-extrabold">AHMET YILMAZ <span className="text-neon">👋</span></h1>
    </div>

    {/* Streak Banner / Progress Card */}
    <div className="mx-6 mb-6 p-5 rounded-2xl vibrant-gradient card-accent-left flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-2xl">🔥</div>
        <div>
          <h4 className="text-[11px] text-text-secondary font-black uppercase tracking-widest">GÜNLÜK HEDEF</h4>
          <p className="font-display text-xl font-extrabold text-white leading-none mt-1">1,240 / 2,000 kcal</p>
        </div>
      </div>
      <div className="w-12 h-12 rounded-full border-4 border-neon flex items-center justify-center text-xs font-black">
        %62
      </div>
    </div>

    {/* Stats Row */}
    <div className="flex gap-3 px-6 mb-8">
      <StatCard icon={Flame} value={stats.totalCalories} label="KALORİ" />
      <StatCard icon={Clock} value="42dk" label="SÜRE" />
      <StatCard icon={Droplets} value={`${(stats.waterDrank / 1000).toFixed(1)}L`} label="SU" color="text-accent-blue" />
    </div>

    {/* Today's Workout */}
    <div className="px-6 mb-4 flex justify-between items-center">
      <h2 className="font-display text-sm font-extrabold tracking-tight">Bugünkü Antrenman</h2>
      <button className="text-neon text-[11px] font-black uppercase tracking-widest">Hepsini Gör</button>
    </div>
    <div 
      onClick={() => onNavigate('workout')}
      className="mx-6 mb-8 p-6 rounded-3xl bg-card border border-zinc-800/50 relative overflow-hidden cursor-pointer group shadow-xl"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-card-light rounded-2xl flex items-center justify-center text-2xl">🔥</div>
        <div>
          <h3 className="font-display text-lg font-extrabold">HIIT Kardiyo</h3>
          <p className="text-text-secondary text-xs font-medium">45 Dakika • Orta Seviye</p>
        </div>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
        <div className="h-full bg-neon w-[62%] rounded-full shadow-[0_0_10px_rgba(217,255,0,0.4)]" />
      </div>
      <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">Hedefin %62'si tamamlandı</p>
    </div>

    {/* Categories */}
    <div className="px-6 mb-4 flex justify-between items-center">
      <h2 className="font-display text-sm font-extrabold tracking-tight">Programlar</h2>
    </div>
    <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-4">
      {WORKOUT_PROGRAMS.map(prog => (
        <div 
          key={prog.id}
          className={`flex-shrink-0 w-40 h-52 rounded-2xl bg-card border border-zinc-800/50 p-4 flex flex-col justify-end relative overflow-hidden group hover:border-neon/30 transition-all`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
          <span className="absolute top-4 left-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">{prog.emoji}</span>
          <div className="relative z-10">
            <span className="inline-block text-[9px] font-black bg-neon text-black px-2 py-0.5 rounded-md mb-2 uppercase tracking-widest">
              {prog.category}
            </span>
            <h4 className="font-display text-sm font-extrabold leading-tight mb-1">{prog.title}</h4>
            <p className="text-[10px] text-text-secondary uppercase font-bold tracking-tighter">{prog.exercises.length} Egzersiz</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const WorkoutScreen = ({ onBack }: { onBack: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    className="pb-24"
  >
    <div className="px-6 pt-12 mb-6">
      <button onClick={onBack} className="text-neon text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-1">
        <ChevronRight size={14} className="rotate-180" /> Geri
      </button>
      <h1 className="font-display text-3xl font-extrabold leading-tight mb-2">Programlar</h1>
      <p className="text-text-secondary text-sm font-medium mb-6">Hedefine uygun olanı seç veya oluştur</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="bg-neon text-black text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">Hepsi</span>
        <span className="bg-card-light text-text-secondary text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">Yağ Yakımı</span>
        <span className="bg-card-light text-text-secondary text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">Kas Kütlesi</span>
        <span className="bg-card-light text-text-secondary text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider">Güç</span>
      </div>
    </div>

    <div className="px-6 mb-4">
      <h2 className="font-display text-xs font-black tracking-widest uppercase text-text-secondary">Popüler Rutinler</h2>
    </div>

    <div className="px-6 space-y-3">
      {WORKOUT_PROGRAMS.map((prog, i) => (
        <div key={prog.id} className={`p-4 rounded-2xl border bg-card border-zinc-800/50 flex items-center gap-4 hover:border-neon/30 transition-all cursor-pointer`}>
          <div className="w-14 h-14 bg-card-light rounded-xl flex items-center justify-center text-2xl border border-zinc-800">
            {prog.emoji}
          </div>
          <div className="flex-1">
            <h4 className="font-extrabold text-sm mb-1">{prog.title}</h4>
            <p className="text-[11px] text-text-secondary font-bold uppercase tracking-tighter">
              {prog.exercises.length} Egzersiz • {prog.duration}
            </p>
          </div>
          <ChevronRight size={16} className="text-zinc-700" />
        </div>
      ))}
      
      <div className="p-8 rounded-2xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center gap-3 text-text-secondary hover:text-neon hover:border-neon/30 transition-all cursor-pointer">
        <Plus size={24} />
        <span className="text-sm font-extrabold uppercase tracking-widest">Yeni Program Oluştur</span>
      </div>
    </div>
  </motion.div>
);

const WaterScreen = ({ stats, onAdd }: { stats: UserStats, onAdd: (ml: number) => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    className="pb-24"
  >
    <div className="px-6 pt-12 mb-12 text-center">
      <h1 className="font-display text-xl font-extrabold uppercase tracking-widest mb-8">Su Takibi</h1>
      
      <div className="relative inline-block mb-12">
        <div className="font-display text-6xl font-black text-accent-blue leading-none">
          {(stats.waterDrank / 1000).toFixed(1)}
          <span className="text-xl text-text-secondary ml-1 uppercase">L</span>
        </div>
        <p className="text-text-secondary text-xs font-black mt-2 uppercase tracking-widest">Hedef: {(stats.waterGoal / 1000).toFixed(1)}L</p>
      </div>

      <div className="flex justify-center items-end gap-4 mb-12">
        <div className="w-16 h-28 bg-accent-blue/5 border-2 border-accent-blue/20 rounded-t-lg rounded-b-2xl relative overflow-hidden">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${Math.min((stats.waterDrank / stats.waterGoal) * 100, 100)}%` }}
            className="absolute bottom-0 left-0 right-0 bg-accent-blue/30"
          />
        </div>
        <div className="text-left pb-2">
          <p className="font-display text-3xl font-black text-accent-blue leading-none">%{Math.round((stats.waterDrank / stats.waterGoal) * 100)}</p>
          <p className="text-[10px] text-text-secondary font-black uppercase tracking-widest">Tamamlandı</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-4 mb-8">
        {[200, 350, 500].map(ml => (
          <button 
            key={ml}
            onClick={() => onAdd(ml)}
            className="bg-accent-blue/5 border border-accent-blue/20 rounded-2xl py-4 active:scale-95 transition-all hover:bg-accent-blue/10"
          >
            <p className="font-display text-lg font-extrabold text-accent-blue">{ml}ml</p>
            <p className="text-[9px] text-text-secondary font-black uppercase tracking-widest">{ml === 500 ? 'Şişe' : 'Bardak'}</p>
          </button>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProfileScreen = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pb-24"
  >
    <div className="px-6 pt-12 mb-8 text-center">
      <div className="w-24 h-24 rounded-full bg-card border-2 border-neon/30 mx-auto mb-4 flex items-center justify-center text-4xl shadow-xl">
        🧑
      </div>
      <h2 className="font-display text-2xl font-extrabold mb-1">Ahmet Yılmaz</h2>
      <p className="text-text-secondary text-xs font-black uppercase tracking-widest">Seviye <span className="text-neon">Gold</span> · Intermediate</p>
    </div>

    <div className="flex bg-card border-y border-zinc-800/50 mb-8">
      <div className="flex-1 p-5 text-center border-r border-zinc-800/50">
        <p className="font-display text-xl font-extrabold text-neon">127</p>
        <p className="text-[9px] text-text-secondary font-black uppercase tracking-widest">Antrenman</p>
      </div>
      <div className="flex-1 p-5 text-center border-r border-zinc-800/50">
        <p className="font-display text-xl font-extrabold text-neon">12</p>
        <p className="text-[9px] text-text-secondary font-black uppercase tracking-widest">Seri Gün</p>
      </div>
      <div className="flex-1 p-5 text-center">
        <p className="font-display text-xl font-extrabold text-neon">89K</p>
        <p className="text-[9px] text-text-secondary font-black uppercase tracking-widest">Kalori</p>
      </div>
    </div>

    <div className="px-6 space-y-3">
      {[
        { icon: Trophy, title: 'Başarımlar', sub: '12 rozet kazanıldı' },
        { icon: BarChart3, title: 'İstatistikler', sub: 'Haftalık ilerleme raporu' },
        { icon: Settings, title: 'Uygulama Ayarları', sub: 'Tema, dil ve veri yönetimi' },
        { icon: LogOut, title: 'Çıkış Yap', sub: '', danger: true },
      ].map((item, i) => (
        <div key={i} className="bg-card border border-zinc-800/50 rounded-2xl p-4 flex items-center gap-4 cursor-pointer active:bg-card-light transition-all hover:border-neon/20">
          <div className="w-10 h-10 bg-card-light rounded-xl flex items-center justify-center text-text-secondary">
            <item.icon size={20} className={item.danger ? 'text-red-500' : ''} />
          </div>
          <div className="flex-1">
            <h4 className={`text-sm font-extrabold ${item.danger ? 'text-red-500' : ''}`}>{item.title}</h4>
            {item.sub && <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">{item.sub}</p>}
          </div>
          <ChevronRight size={16} className="text-zinc-700" />
        </div>
      ))}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [stats, setStats] = useState<UserStats>({
    streak: 12,
    totalWorkouts: 127,
    totalCalories: 847,
    waterDrank: 1200,
    waterGoal: 2500
  });

  const addWater = (ml: number) => {
    setStats(prev => ({
      ...prev,
      waterDrank: Math.min(prev.waterDrank + ml, prev.waterGoal + 1000)
    }));
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-dark relative overflow-hidden shadow-2xl border-x border-zinc-900">
      {/* Status Bar Mock */}
      <div className="absolute top-0 left-0 right-0 h-12 flex justify-between items-center px-8 z-50 pointer-events-none">
        <span className="text-xs font-black">09:41</span>
        <div className="flex gap-1.5 items-center">
          <div className="flex gap-0.5 items-end h-2.5">
            {[2, 4, 6, 8].map(h => <div key={h} style={{ height: h }} className="w-0.5 bg-white rounded-full" />)}
          </div>
          <span className="text-[10px] font-black">5G</span>
          <div className="w-5 h-2.5 border border-white/30 rounded-sm relative">
            <div className="absolute left-0.5 top-0.5 bottom-0.5 bg-neon rounded-sm w-[70%]" />
          </div>
        </div>
      </div>

      {/* Screen Content */}
      <main className="h-screen overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {activeScreen === 'home' && (
            <div key="home">
              <HomeScreen stats={stats} onNavigate={setActiveScreen} />
            </div>
          )}
          {activeScreen === 'workout' && (
            <div key="workout">
              <WorkoutScreen onBack={() => setActiveScreen('home')} />
            </div>
          )}
          {activeScreen === 'water' && (
            <div key="water">
              <WaterScreen stats={stats} onAdd={addWater} />
            </div>
          )}
          {activeScreen === 'profile' && (
            <div key="profile">
              <ProfileScreen />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-card border-t border-zinc-800/50 flex justify-around items-center pt-2 pb-8 px-4 z-50">
        <NavItem active={activeScreen === 'home'} icon={Home} label="Panel" onClick={() => setActiveScreen('home')} />
        <NavItem active={activeScreen === 'workout'} icon={Dumbbell} label="Program" onClick={() => setActiveScreen('workout')} />
        <NavItem active={activeScreen === 'water'} icon={Droplets} label="Su" onClick={() => setActiveScreen('water')} />
        <NavItem active={activeScreen === 'profile'} icon={User} label="Profil" onClick={() => setActiveScreen('profile')} />
      </nav>

      {/* Notification Mock */}
      {stats.waterDrank < stats.waterGoal && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 60, opacity: 1 }}
          className="absolute left-4 right-4 bg-card border border-neon/30 p-4 rounded-2xl flex items-center gap-4 z-[100] shadow-2xl"
        >
          <div className="text-2xl">💧</div>
          <div>
            <p className="text-[10px] text-neon font-black uppercase tracking-widest">FitZone Hatırlatıcı</p>
            <p className="text-xs font-extrabold">Su içme zamanı! Hedefin için {stats.waterGoal - stats.waterDrank}ml kaldı.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
