export const useTrackEvent = () => {
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    const event = {
      event: eventName,
      data: data || {},
      timestamp: new Date().toISOString()
    }

    console.log('[TRACKING]', event)

    // 🔹 Vérifie qu’on est bien côté navigateur
    if (process.client) {
      const history = JSON.parse(localStorage.getItem('tracking') || '[]')
      history.push(event)
      localStorage.setItem('tracking', JSON.stringify(history))
    }
  }

  return { trackEvent }
}
