(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
    class SatchiTools {
        
        constructor(){
            
            this.DOMelements = {
                catWidget: '.widget_categories',
            }
            
            this.onLoad();
            this.events();
            
        }
        
        events() {
            var DOM = this.DOMelements;

            document.querySelector('.widget_categories').addEventListener('click', this.expandChilds.bind(this));
        }
        
        // Methods
        
        onLoad() {
            
            // On load hide nested categories
            var DOM = this.DOMelements;
            var expander = document.createElement("SPAN"); 
            expander.className = 'expand-child';
            var expanderText = document.createTextNode("[+]"); 
            expander.appendChild(expanderText); //document.querySelector(DOM.catWidget).querySelectorAll('.children').appendChild(expander);
            
            var catWidget = document.querySelector(DOM.catWidget);
            
            var children = catWidget.querySelectorAll('.children');
            
            var childrenHeight = 0;
            children.forEach(function(element, index){
                
                var expander = document.createElement("SPAN"); 
                expander.className = 'expand-child';
                var expanderText = document.createTextNode("[+]"); 
                expander.appendChild(expanderText);                 
                
                childrenHeight = element.offsetHeight;
                element.setAttribute('data-height', childrenHeight);
                
                element.parentElement.classList.add('parent-child');
                element.parentElement.appendChild(expander);
            });
            
        }
        
        expandChilds(e) {
            console.log('expand');
            e.target.parentElement.classList.toggle('show-children');
           
           var childrenStyle =  e.target.parentElement.querySelector('.children').hasAttribute("style");
            var childrenHeight =  e.target.parentElement.querySelector('.children').getAttribute('data-height');           
            if( !childrenStyle){
               e.target.parentElement.querySelector('.children').style.maxHeight = childrenHeight +'px';
            }  else {
               e.target.parentElement.querySelector('.children').removeAttribute("style") 
            }
        }
    }
    
    var satchiTools = new SatchiTools(); 

})( jQuery );
