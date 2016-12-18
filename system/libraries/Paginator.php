<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class CI_Paginator {

	protected $base_url		= ''; // /community/show/thread-1/
	protected $url_suffix   = ''; // ?sort=seedsorder=asc
	protected $group_open   = '<div class="pages botmarg5px floatright" base_url="{base_url}" url_suffix="{url_suffix}" num_pages="{num_pages}" cur_page="{cur_page}"><a class="turnoverButton siteButton bigButton kaTurnoverButton" onclick="page_specify($(this));" title="Go to a specific page"><i class="ka ka-zoom"></i></a>';
	protected $link_current = '<a class="turnoverButton siteButton bigButton active">{page_num}</a>';
	protected $link_number  = '<a rel="nofollow" href="{base_url}{page_num}/{url_suffix}" class="turnoverButton siteButton bigButton">{page_num}</a>';
	protected $link_gap     = '<a class="turnoverButton siteButton blank nohov"></a>';
	protected $group_close  = '</div>';
	protected $num_links    = 9; // e.g. "1 ... 6 8 8 <9> 10 11 12 ... 34" = 9 buttons
	protected $per_page     = 10; // items per page
	protected $total_rows   = 1; // all records in db
	protected $cur_page     = 1; // current page num

	// --------------------------------------------------------------------

	public function __construct($params = array()) {
		// $this->CI =& get_instance();
		// $this->CI->load->language('pagination');
		// foreach (array('first_link', 'next_link', 'prev_link', 'last_link') as $key)
		// {
		// 	if (($val = $this->CI->lang->line('pagination_'.$key)) !== FALSE)
		// 	{
		// 		$this->$key = $val;
		// 	}
		// }
		$this->initialize($params);
	}

	public function initialize(array $params = array()) {
		foreach ($params as $key => $val) {
			if (property_exists($this, $key))
			{
				$this->$key = $val;
			}
		}
		return $this;
	}

	// --------------------------------------------------------------------

	/**
	 * Generate the pagination links
	 *
	 * @return	string
	 */
	public function create_links() {
		$output = '';
		// Calculate the total number of pages
		$num_pages = (int)ceil($this->total_rows / $this->per_page);

		$this->link_current = str_replace('{base_url}', $this->base_url, $this->link_current);
		$this->link_current = str_replace('{url_suffix}', $this->url_suffix, $this->link_current);
		$this->link_number = str_replace('{base_url}', $this->base_url, $this->link_number);
		$this->link_number = str_replace('{url_suffix}', $this->url_suffix, $this->link_number);
		$this->group_open = str_replace('{base_url}', $this->base_url, $this->group_open);
		$this->group_open = str_replace('{url_suffix}', $this->url_suffix, $this->group_open);
		$this->group_open = str_replace('{num_pages}', $num_pages, $this->group_open);
		$this->group_open = str_replace('{cur_page}', $this->cur_page, $this->group_open);

		// Is there only one page? Hm... nothing more to do here then.
		if ($num_pages === 1) {
			return $this->wrap_links(str_replace('{page_num}', 1, $this->link_current));
		}

		if ($num_pages < $this->num_links) {
			for($i=1;$i<=$num_pages;$i++) {
				$output .= $i == $this->cur_page ? str_replace('{page_num}', $i, $this->link_current) : str_replace('{page_num}', $i, $this->link_number); // pages 1,2,3,4,5,6,7,8,9
			}
			return $this->wrap_links($output);
		}
		// Can the links be generated 1 through to the last page?
		if ($this->num_links >= $num_pages) {
			for($i=1;$i<=$this->num_links;$i++) {
				$output .= $i == $this->cur_page ? str_replace('{page_num}', $i, $this->link_current) : str_replace('{page_num}', $i, $this->link_number); // pages 1,2,3,4,5,6,7,8,9
			}
			return $this->wrap_links($output);
		}
		$each_side = floor($this->num_links / 2); // 9 = 4
		// Can all but page 2 be generated?
		if ($this->cur_page >= $num_pages-$each_side) {
			$output .= str_replace('{page_num}', 1 , $this->link_number);
			$output.=$this->link_gap;
			for($i=$num_pages+2-$this->num_links;$i<=$num_pages;$i++) {
				if ($this->cur_page >= $num_pages+1-$this->num_links) {
					$output .= $i == $this->cur_page ? str_replace('{page_num}', $i, $this->link_current) : str_replace('{page_num}', $i, $this->link_number); // pages 1,3,4,5,6,7,8,9,10
				}else{
					$output.=$this->link_gap;
				}
			}
			return $this->wrap_links($output);
		}
		//Can all but page {total}-1 be generated?
		if ($this->num_links < $num_pages && $this->cur_page<$this->num_links-$each_side+1) {
			for($i=1;$i<=$this->num_links-1;$i++) {
				$output .= $i == $this->cur_page ? str_replace('{page_num}', $i, $this->link_current) : str_replace('{page_num}', $i, $this->link_number); // pages 1,2,3,4,5,6,7,8
			}
			$output.=$this->link_gap;
			$output.= str_replace('{page_num}', $num_pages, $this->link_number); // page 10
			return $this->wrap_links($output);
		}
		// default
		$output.= str_replace('{page_num}', 1, $this->link_number); // page 1
		$output.=$this->link_gap;
		for($i=$this->cur_page-$each_side+1;$i<=$this->cur_page+$each_side-1;$i++) {
			$output .= $i == $this->cur_page ? str_replace('{page_num}', $i, $this->link_current) : str_replace('{page_num}', $i, $this->link_number); // pages 5,6,7,8,9,10,11,
		}
		$output.=$this->link_gap;
		$output.= str_replace('{page_num}', $num_pages, $this->link_number); // page 34
		return $this->wrap_links($output);
	}
	public function wrap_links($buttons) {
		return $this->group_open.$buttons.$this->group_close;
	}

}
