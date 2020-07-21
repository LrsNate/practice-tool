package models


import java.time.Instant

import models.ReedSession.ReedSessionId


case class ReedSession(id: ReedSessionId, reed: Reed, playedAt: Instant, strength: Int)

package object ReedSession {
  type ReedSessionId = String
}