import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation'; 

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center p-6 font-mono">
      <div className="max-w-lg w-full">
      
        <div className="mb-6">
          <svg className="w-32 h-32 mx-auto text-yellow-400 animate-shake" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        <div className="relative inline-block mb-6">
          <h1 className="text-8xl font-extrabold text-white z-10 relative">404</h1>
          <div className="text-8xl font-extrabold absolute top-0 left-0 w-full h-full text-red-500 animate-glitch" style={{ textShadow: '-2px 0 #0ff' }}>404</div>
        </div>

        <p className="text-2xl font-semibold text-gray-300 mb-8">PAGE NOT FOUND</p>
        
        <div className="bg-black text-left rounded-lg p-4 text-sm text-white shadow-lg border border-gray-700 min-h-[110px]">
          <TypeAnimation
            sequence={[
              '> Mencari halaman...',
              1500,
              '> Mencari halaman...\n> Menjalankan script pencarian...',
              1500,
              '> Mencari halaman...\n> Menjalankan script pencarian...\n> Error: Halaman ini seperti semicolon yang hilang.',
              2000,
              '> Mencari halaman...\n> Menjalankan script pencarian...\n> Error: Halaman ini seperti semicolon yang hilang.\n> Tidak bisa ditemukan dan mungkin menyebabkan masalah.',
              3000,
            ]}
            wrapper="pre"
            speed={60}
            style={{ whiteSpace: 'pre-wrap' }}
            repeat={Infinity}
            cursor={true}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;