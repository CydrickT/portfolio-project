import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'pagepiling.js/dist/jquery.pagepiling.css';
import 'pagepiling.js';

const PagePiling = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize pagePiling once the component is mounted
    $(containerRef.current).pagepiling({
      // your pagePiling options here
      sectionSelector: '.section',
      anchors: ['first', 'second', 'third'],
      navigation: {
        position: 'right',
        tooltips: ['First', 'Second', 'Third']
      }
      // ...other options
    });

    return () => {
      // Clean up: destroy pagePiling when component unmounts
      $.fn.pagepiling.destroy('all');
    };
  }, []);

  return (
    <div id="pagepiling" ref={containerRef}>
      <div className="section">Section 1</div>
      <div className="section">Section 2</div>
      <div className="section">Section 3</div>
    </div>
  );
};

export default PagePiling;