import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share, Bookmark, Calendar, Tag, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { mockData } from '../data/mockData';

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const article = mockData.news.find(a => a.id === id);

  if (!article) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Article not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="px-4 pt-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bookmark size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Share size={20} />
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-4 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Tag size={14} className="mr-1" />
            {article.category}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {article.date}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            5 min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>

        {/* Featured Image */}
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl"
        />

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {article.excerpt}
          </p>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              UNFPA Algeria continues to strengthen its commitment to empowering young people 
              across the country through innovative programs and partnerships. This latest 
              initiative represents a significant step forward in addressing the unique 
              challenges faced by Algerian youth.
            </p>
            
            <p>
              The program focuses on three key areas: education and skills development, 
              reproductive health awareness, and economic empowerment. Through collaboration 
              with local organizations and government partners, UNFPA aims to reach over 
              50,000 young people in the first phase of implementation.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Program Components</h2>
            
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive sexuality education workshops</li>
              <li>Leadership and entrepreneurship training</li>
              <li>Peer-to-peer mentoring programs</li>
              <li>Digital literacy and technology skills</li>
              <li>Gender equality advocacy training</li>
            </ul>
            
            <p>
              "This program represents our ongoing commitment to ensuring that every young 
              person in Algeria has the opportunity to reach their full potential," said 
              the UNFPA Algeria Representative. "By investing in youth today, we are 
              building a stronger, more equitable future for all."
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Expected Impact</h2>
            
            <p>
              The initiative is expected to have far-reaching effects on communities across 
              Algeria. Early indicators suggest strong community support and engagement, 
              with local leaders actively participating in program design and implementation.
            </p>
            
            <p>
              For more information about UNFPA Algeria's youth programs or to get involved, 
              please contact our office or visit our programs section.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
          <div className="space-y-3">
            {mockData.news.filter(a => a.id !== article.id && a.category === article.category).slice(0, 2).map((relatedArticle) => (
              <div 
                key={relatedArticle.id}
                onClick={() => navigate(`/news/${relatedArticle.id}`)}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <img 
                  src={relatedArticle.image} 
                  alt={relatedArticle.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{relatedArticle.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;