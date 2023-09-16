import React from 'react';
import {
  Widget, 
  SearchWidget, 
  RecentPostWidget, 
  CategoryWidget,
  GalleryWidget,
  TagWidget
} from '../../components';

// Widgets Data
import widgetsData from '../../data/widgets.json';
const {recentPosts, blogTags, galleryImages, categoryList} = widgetsData;

const SidebarOne = ({className})=> (
  <aside className={`sidebar-area ${className || ''}`}>
    <Widget>
      <SearchWidget/>
    </Widget>
    <Widget widgetTitle="Post Recientes">
      {recentPosts.map(post => (
        <RecentPostWidget key={post.id}
          title={post.title}
          image={post.image}
          date={post.date}
          path={post.path}
        />
      ))}
    </Widget>
    <Widget widgetTitle="Categorías" className="widget_nav_menu">
      <CategoryWidget>
        {categoryList.map(cat => (
          <CategoryWidget.Item key={cat} path="/blog">{cat}</CategoryWidget.Item>
        ))}
      </CategoryWidget>
    </Widget>
    <Widget widgetTitle="Post Galerías">
      <GalleryWidget>
        {galleryImages.map((img, index) => (          
          <GalleryWidget.Item key={index} src={img} alt="thumb"/>
        ))}
      </GalleryWidget>
    </Widget>
    <Widget widgetTitle="Tags Populares" className="widget_tag_cloud">
      <TagWidget>
        {blogTags.map((tag, index) => (          
          <TagWidget.Item key={index} path="/blog">{tag}</TagWidget.Item>
        ))}
      </TagWidget>
    </Widget>
  </aside>
);

export default SidebarOne;