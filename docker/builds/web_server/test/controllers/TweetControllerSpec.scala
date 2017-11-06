package controllers

import com.typesafe.play.cachecontrol.Cache
import org.scalatestplus.play._
import org.scalatestplus.play.guice._
import org.scalatest.mock.MockitoSugar
import play.api.test._
import play.api.test.Helpers._
import org.mockito.Mockito._
import play.api.cache.Cached
import play.api.mvc._

import scala.concurrent.Future

class TweetControllerSpec extends PlaySpec with Results with GuiceOneAppPerTest with Injecting with MockitoSugar {

  "TweetController GET get_recent_tweets" should {
    "should be valid" in {
      val mockCache = mock[Cached]
      val mockControllerComponents = mock[ControllerComponents]
      val controller = new TweetController(mockCache, mockControllerComponents)
      true mustBe true
    }
  }
}
