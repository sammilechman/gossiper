class FeedsController < ApplicationController
  before_action :check_for_update, :only => [:show]

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    feed = Feed.find(params[:id])
    render :json => feed, include: :entries
  end

  def check_for_update
    feed = Feed.find(params[:id])
    last_updated = feed.updated_at.to_time
    current_time = Time.now
    feed.reload if (((current_time - last_updated) / 60) > 0.2)
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
