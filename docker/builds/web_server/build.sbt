name := """twitter-reader-web-server"""
organization := "com.andrewallbright"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.3"

resolvers += Resolver.sonatypeRepo("releases")

libraryDependencies += guice
libraryDependencies ++= Seq(
  ehcache
)
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
libraryDependencies += "com.danielasfregola" %% "twitter4s" % "5.2"
