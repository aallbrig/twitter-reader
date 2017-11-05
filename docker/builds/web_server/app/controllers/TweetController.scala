package controllers

import javax.inject._

import play.api.libs.json._
import play.api.mvc._
import play.api.cache.Cached
import javax.inject.Inject

import scala.concurrent._
import scala.concurrent.duration._
import ExecutionContext.Implicits.global
import com.danielasfregola.twitter4s.TwitterRestClient
import com.danielasfregola.twitter4s.entities._

@Singleton
class TweetController @Inject()(cached: Cached, cc: ControllerComponents) extends AbstractController(cc) {
  val restClient = TwitterRestClient()
  val targetTwitterUser = "salesforce"
  val targetTweetCount = 10

  implicit val mediaWrites = new Writes[Media] {
    def writes(media:Media) = Json.obj(
      "id" -> media.id,
      "url" -> media.media_url
    )
  }

  implicit val hashTagWrites = new Writes[HashTag] {
    def writes(hashTag:HashTag) = Json.obj(
      "tag" -> hashTag.text
    )
  }

  implicit val entityWrites = new Writes[Entities] {
    def writes(entity:Entities) = Json.obj(
      "hashtags" -> entity.hashtags,
      "media" -> entity.media
    )
  }

  implicit val coordinateWrites = new Writes[Coordinates] {
    def writes(coords:Coordinates) = Json.obj(
      "coordinates" -> coords.coordinates
    )
  }

  implicit val profileImage = new Writes[ProfileImage] {
    def writes(proImg:ProfileImage) = Json.obj(
      "mini" -> proImg.mini,
      "normal" -> proImg.normal,
      "bigger" -> proImg.bigger,
      "default" -> proImg.default
    )
  }

  implicit val twitterUserWrites = new Writes[User] {
    def writes(usr:User) = Json.obj(
      "id" -> usr.id,
      "name" -> usr.name,
      "screen_name" -> usr.screen_name,
      "friends_count" -> usr.friends_count,
      "profile" -> usr.profile_image_url
    )
  }

  implicit val tweetWrites = new Writes[Tweet] {
    def writes(tweet: Tweet) = Json.obj(
      "id" -> tweet.id,
      "user" -> tweet.user,
      "text" -> tweet.text,
      "created_at" -> tweet.created_at,
      "entities" -> tweet.entities,
      "favorite_count" -> tweet.favorite_count,
      "retweet_count" -> tweet.retweet_count,
      "coordinates" -> tweet.coordinates
    )
  }

  def getRecentTweets() = cached(
    (_: RequestHeader) =>  targetTwitterUser + ".tweets",
    58.seconds
  ) {
    Action.async {
      println("Starting extraction of tweets from API!")
      for {
        tweets <- restClient.userTimelineForUser(
          screen_name = targetTwitterUser,
          count = targetTweetCount
        )
      } yield {
        println("Finished extraction of tweets from API!")
        Ok(Json.obj("status" -> "OK", "tweets" -> tweets.data))
      }
    }
  }
}
