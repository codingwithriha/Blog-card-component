import articleImage from '../assets/images/illustration-article.svg'
import avatarImage from '../assets/images/image-avatar.webp'

export default function BlogCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-200">
      
      <div className="bg-white p-5 rounded-2xl shadow-lg w-80">
        
        <img
          src={articleImage}
          alt="blog"
          className="rounded-xl mb-4"
        />

        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
          Learning
        </span>

        <p className="text-xs text-gray-600 mt-3">
          Published 21 Dec 2023
        </p>

        <h2 className="text-lg font-bold mt-3 hover:text-yellow-500 cursor-pointer">
          HTML & CSS foundations
        </h2>

        <p className="text-sm text-gray-600 mt-2">
          These languages are the backbone of every website.
        </p>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={avatarImage}
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm font-semibold">Greg Hooper</p>
        </div>

      </div>
    </div>
  );
}