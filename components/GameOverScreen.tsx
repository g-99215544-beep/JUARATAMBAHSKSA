import React from 'react';
import { RetroButton, RetroPanel } from './RetroUI';

interface GameOverScreenProps {
  score: number;
  isScoreSaved: boolean;
  onRestart: () => void;
  onShowLeaderboard: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ 
  score, 
  isScoreSaved,
  onRestart, 
  onShowLeaderboard 
}) => {
  return (
    <RetroPanel className="w-full max-w-md text-center animate-pop">
      <h2 className="text-4xl font-black mb-2 text-gray-800">TAMAT!</h2>
      <p className="text-gray-400 font-bold mb-6">Hebat!</p>
      
      {!isScoreSaved && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-6">
           <p className="font-bold text-xs text-yellow-700 leading-relaxed uppercase tracking-wide">
             Mod Latihan<br/>
             <span className="text-[10px] font-normal opacity-80">(Markah tidak direkodkan di luar waktu sekolah)</span>
           </p>
        </div>
      )}

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 mb-8 rounded-3xl border border-indigo-100">
        <p className="text-sm font-bold text-indigo-400 uppercase mb-2 tracking-widest">MARKAH ANDA</p>
        <p className="text-7xl font-black text-indigo-600">{score}</p>
      </div>

      <div className="space-y-3">
        <RetroButton onClick={onRestart} fullWidth>
          MAIN SEMULA
        </RetroButton>
        <RetroButton onClick={onShowLeaderboard} variant="secondary" fullWidth>
          PAPAN MARKAH
        </RetroButton>
      </div>
    </RetroPanel>
  );
};

export default GameOverScreen;