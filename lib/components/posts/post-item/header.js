/** @babel */
/** @jsx etch.dom */
import etch from 'etch'
import { humanize_time, go_to, open_post_editor } from '../../../helpers'

export default class Header {
    constructor ({ post }) {
        this.post = post
        etch.initialize(this)
    }

    render () {
        return (
            <div className="post-card__header">
                { this.post.is_published && this.post.user
                    ? (
                        <div className="post-card__status d-flex">
                            <a
                                className="post-meta__link"
                                onClick={() => go_to(`/u/${this.post.user.data.username}`)}
                            >
                                {this.post.user.data.name}
                            </a>
                            <div className="text-muted">
                                {humanize_time(this.post.published_at)}
                            </div>
                        </div>
                    ) : null
                }
                <h4 className="post-title">
                    <a
                        onClick={() => open_post_editor(this.post.hash_id)}
                    >
                        {this.post.is_draft ? <i className="fa fa-lock draft-icon"></i> : null}
                        {this.post.status === 'draft_public' ? <i className="fa fa-unlock draft-icon"></i> : null}
                        {this.post.title}
                    </a>
                </h4>
            </div>
        )
    }

    update ({ post }) {
        this.post = post
        etch.update(this)
    }
}
