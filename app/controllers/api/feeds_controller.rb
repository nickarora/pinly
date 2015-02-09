module Api
  class FeedsController < ApiController

    def index

      posts_per_page = 12

      if (!params[:queryString])
      	board_ids = Follow.where(user_id: current_user.id).pluck(:board_id)
      	
      	@boardpins = Boardpin
					.where(board_id: board_ids)
					.order("created_at DESC")
					.page(params[:page])
					.per(posts_per_page);

      	@page = params[:page]
      	@total_pages = @boardpins.total_pages
      								
        render :index
      else
          str = params[:queryString].split(',').join(' ')
          
          @search = Boardpin.search do
            fulltext str
            paginate :page => 1, :per_page => posts_per_page
          end
          
          @boardpins = @search.results
          @page = params[:page]
          @total_pages = @boardpins.total_pages

          render :index
      end
    end

  end
end