import React from 'react'

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error) {
        console.log(error)
    }

    render() {
        if (this.state.hasError) return <div>Something went wrong</div>

        return this.props.children
    }
}

export default ErrorBoundary
